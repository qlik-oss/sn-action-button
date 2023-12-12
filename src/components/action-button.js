/* eslint-disable no-await-in-loop */
import allActions from "../utils/actions";
import navigationActions from "../utils/navigation-actions";
import styleFormatter from "../utils/style-formatter";

export const runActions = async ({ actionCallList, model, layout, app }) => {
  if (layout.runtimeExpressionEvaluation) {
    const properties = await model.getProperties();
    for (let i = 0; i < actionCallList.length; i++) {
      const overrideValue =
        properties.actions[i].value?.qStringExpression?.qExpr &&
        (await app.evaluate(properties.actions[i].value?.qStringExpression?.qExpr));
      const overrideVariable =
        properties.actions[i].variable?.qStringExpression?.qExpr &&
        (await app.evaluate(properties.actions[i].variable?.qStringExpression?.qExpr));
      await actionCallList[i](overrideValue, overrideVariable);
    }
  } else {
    for (let i = 0; i < actionCallList.length; i++) {
      await actionCallList[i]();
    }
  }
};

export const renderButton = ({
  layout,
  theme,
  app,
  constraints,
  senseNavigation,
  element,
  multiUserAutomation,
  translator,
  model,
}) => {
  const isSense = !!senseNavigation;
  const button = element.firstElementChild;
  const { style, qStateName, navigation } = layout;
  const disabled = layout.useEnabledCondition && layout.enabledCondition === 0;
  const isClickable = !disabled && !constraints.active;
  const formattedStyles = styleFormatter.getStyles({
    style,
    disabled,
    theme,
    element,
    app,
  });

  button.setAttribute("style", formattedStyles);
  button.setAttribute("tabindex", "-1");
  styleFormatter.createLabelAndIcon({ button, theme, style, isSense });

  button.onclick = async () => {
    if (isClickable) {
      const actionCallList = [];
      const { actions } = layout;
      actions.forEach((action) => {
        const actionObj = allActions.find((act) => act.value === action.actionType);
        actionObj &&
          actionCallList.push(
            actionObj.getActionCall({
              app,
              qStateName,
              ...action,
              senseNavigation,
              multiUserAutomation,
              translator,
            })
          );
      });
      button.setAttribute("disabled", true);
      await runActions({ actionCallList, model, layout, app });
      if (senseNavigation && !senseNavigation.getCurrentStoryId()) {
        const navigationObject = navigation && navigationActions.find((nav) => nav.value === navigation.action);
        if (senseNavigation && navigationObject && typeof navigationObject.navigationCall === "function") {
          await navigationObject.navigationCall({
            app,
            senseNavigation,
            ...navigation,
            element,
          });
        }
      }
      button.removeAttribute("disabled");
    }
  };

  const scale = () => {
    if (isClickable) {
      const { offsetWidth, offsetHeight } = button;
      button.style.transform =
        offsetHeight > offsetWidth
          ? `scale(${0.98}, ${1 - (offsetWidth / offsetHeight) * 0.02})`
          : `scale(${1 - (offsetHeight / offsetWidth) * 0.02}, ${0.98})`;
    }
  };

  const resetScale = () => {
    const { transform } = button.style;
    if (isClickable && transform !== "" && transform !== "scale(1)") {
      button.style.transform = "scale(1)";
    }
  };

  button.onmousedown = (event) => {
    if (event.button === 0) {
      scale();
    }
  };
  button.onmouseup = resetScale;
  button.onmouseleave = resetScale;
  button.ontouchstart = scale;
  button.ontouchend = resetScale;
  button.ontouchcancel = resetScale;

  return () => {
    button.onclick = undefined;
    button.onmousedown = undefined;
    button.onmouseup = undefined;
    button.onmouseleave = undefined;
    button.ontouchstart = undefined;
    button.ontouchend = undefined;
    button.ontouchcancel = undefined;
  };
};
