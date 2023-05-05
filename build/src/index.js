import { useApp, useConstraints, useEffect, useElement, useImperativeHandle, useMemo, useStaleLayout, useTheme, } from "@nebula.js/stardust";
import data from "./data";
import ext from "./ext";
import properties from "./object-properties";
import { renderButton } from "./components/action-button";
export default function supernova(env) {
    var _a, _b;
    var sense = env.sense, translator = env.translator, isEnabled = env.flags.isEnabled, anything = env.anything;
    var isFeatureBlacklisted = (_a = anything.sense) === null || _a === void 0 ? void 0 : _a.isFeatureBlacklisted;
    var isUnsupportedFeature = (_b = anything.sense) === null || _b === void 0 ? void 0 : _b.isUnsupportedFeature;
    var shouldHide = { isEnabled: isEnabled, isFeatureBlacklisted: isFeatureBlacklisted, isUnsupportedFeature: isUnsupportedFeature };
    var multiUserAutomation = isEnabled === null || isEnabled === void 0 ? void 0 : isEnabled("SENSECLIENT_IM_1855_AUTOMATIONS_MULTI_USER");
    var senseNavigation = sense === null || sense === void 0 ? void 0 : sense.navigation;
    properties.style.label = sense ? translator.get("Object.ActionButton") : "Button";
    return {
        qae: {
            properties: properties,
            data: data,
        },
        component: function () {
            var element = useElement();
            var theme = useTheme();
            useMemo(function () {
                var button = document.createElement("button");
                button.appendChild(document.createElement("text"));
                element.appendChild(button);
            }, []);
            var layout = useStaleLayout();
            var app = useApp();
            var constraints = useConstraints();
            var cleanup = renderButton({
                element: element,
                layout: layout,
                constraints: constraints,
                theme: theme,
                app: app,
                senseNavigation: senseNavigation,
                multiUserAutomation: multiUserAutomation,
                translator: translator,
            });
            useEffect(function () { return function () {
                cleanup();
            }; }, [element]);
            useImperativeHandle(function () { return ({
                focus: function () {
                    element.firstElementChild.onclick();
                },
            }); }, [element]);
        },
        ext: ext({ translator: translator, shouldHide: shouldHide, senseNavigation: senseNavigation }),
    };
}
