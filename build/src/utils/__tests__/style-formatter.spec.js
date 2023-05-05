import defaultValues from "../../__tests__/default-button-props";
import { getStyleEditorDefinition } from "../../styling-panel-definition";
import styleFormatter from "../style-formatter";
describe("style-formatter", function () {
    describe("getStyles", function () {
        var style;
        var defaultStyle = "width: 100%;height: 100%;transition: transform .1s ease-in-out;position: absolute;bottom: 0;left: 0; top: 0;right: 0;margin: auto;cursor: pointer;color: #ffffff;font-weight: bold;background-color: myPrimaryColor;border: none;";
        var someColor = "#ffff00";
        var someColorExpression = "rgb(255,255,0)";
        var app = {
            session: {
                config: {
                    url: "wss://localhost/app/12345-5678",
                },
            },
        };
        var someUrl = "/media/Logo/qlik.png";
        var theme;
        var layout;
        var disabled = false;
        var element;
        beforeEach(function () {
            var d = defaultValues();
            theme = d.theme;
            layout = d.layout;
            style = layout.style;
            element = {
                offsetHeight: 200,
                offsetWidth: 100,
            };
        });
        afterEach(function () {
            jest.resetAllMocks();
        });
        it("should return default styling", function () {
            var formattedStyle = styleFormatter.getStyles({ style: style, disabled: disabled, theme: theme, element: element, app: app });
            expect(formattedStyle).toEqual(defaultStyle);
        });
        // enable
        it("should have set opacity and cursor for disabled button", function () {
            var formattedStyle = styleFormatter.getStyles({ style: style, disabled: true, theme: theme, element: element, app: app });
            expect(formattedStyle.includes("opacity: 0.4")).toBe(true);
            expect(formattedStyle.includes("cursor: pointer")).toBe(false);
        });
        it("should not have set opacity for enabled button", function () {
            var formattedStyle = styleFormatter.getStyles({ style: style, disabled: disabled, theme: theme, element: element, app: app });
            expect(formattedStyle.includes("opacity: 0.4")).toBe(false);
        });
        // font
        it.only("should return specified font color", function () {
            style.font.color.color = someColor;
            var formattedStyle = styleFormatter.getStyles({ style: style, disabled: disabled, theme: theme, element: element, app: app });
            expect(formattedStyle.includes("color: ".concat(someColor))).toBe(true);
        });
        it("should return specified font color from expression", function () {
            style.font.colorExpression = someColorExpression;
            style.font.useColorExpression = true;
            var formattedStyle = styleFormatter.getStyles({ style: style, disabled: disabled, theme: theme, element: element, app: app });
            expect(formattedStyle.includes("color: ".concat(someColorExpression))).toBe(true);
        });
        it("should return font-weight: bold when bold is selected", function () {
            style.font.style.bold = true;
            var formattedStyle = styleFormatter.getStyles({ style: style, disabled: disabled, theme: theme, element: element, app: app });
            expect(formattedStyle.includes("font-weight: bold")).toBe(true);
        });
        it("should return font-style: italic when italic is selected", function () {
            style.font.style.italic = true;
            var formattedStyle = styleFormatter.getStyles({ style: style, disabled: disabled, theme: theme, element: element, app: app });
            expect(formattedStyle.includes("font-style: italic")).toBe(true);
        });
        // background
        it("should return specified background color", function () {
            style.background.color.color = someColor;
            var formattedStyle = styleFormatter.getStyles({ style: style, disabled: disabled, theme: theme, element: element, app: app });
            expect(formattedStyle.includes("background-color: ".concat(someColor))).toBe(true);
        });
        it("should return specified background color from expression", function () {
            style.background.colorExpression = someColorExpression;
            style.background.useColorExpression = true;
            var formattedStyle = styleFormatter.getStyles({ style: style, disabled: disabled, theme: theme, element: element, app: app });
            expect(formattedStyle.includes("background-color: ".concat(someColorExpression))).toBe(true);
        });
        it("should return default background color when color is none", function () {
            var formattedStyle = styleFormatter.getStyles({ style: style, disabled: disabled, theme: theme, element: element, app: app });
            expect(formattedStyle.includes("background-color: myPrimaryColor")).toBe(true);
        });
        it("should return specified image url when the background mode is set on media", function () {
            style.background.useImage = false;
            style.background.mode = "media";
            style.background.url.qStaticContentUrl = { qUrl: someUrl };
            var formattedStyle = styleFormatter.getStyles({ style: style, disabled: disabled, theme: theme, element: element, app: app });
            expect(formattedStyle.includes("background-image: url('https://localhost".concat(someUrl, "')"))).toBe(true);
            expect(formattedStyle.includes("background-size: auto auto")).toBe(true);
            expect(formattedStyle.includes("background-position: 50% 50%")).toBe(true);
            expect(formattedStyle.includes("background-repeat: no-repeat")).toBe(true);
        });
        it("should not show size/position when background mode is set on media but the url is not set", function () {
            style.background.useImage = false;
            style.background.mode = "media";
            style.background.url.qStaticContentUrl = undefined;
            var formattedStyle = styleFormatter.getStyles({ style: style, disabled: disabled, theme: theme, element: element, app: app });
            expect(formattedStyle.includes("background-image:")).toBe(false);
            expect(formattedStyle.includes("background-size:")).toBe(false);
            expect(formattedStyle.includes("background-position:")).toBe(false);
            expect(formattedStyle.includes("background-repeat:")).toBe(false);
        });
        it("should keep the image url but not show it when the mode changes from media to none", function () {
            var backgroundImageMode = getStyleEditorDefinition().items.backgroundOptions.items.backgroundImage.items.backgroundImageMode;
            style.background.useImage = false;
            style.background.mode = "media";
            style.background.url.qStaticContentUrl = { qUrl: someUrl };
            var formattedStyle = styleFormatter.getStyles({ style: style, disabled: disabled, theme: theme, element: element, app: app });
            expect(formattedStyle.includes("background-image:")).toBe(true);
            style.background.mode = "none";
            backgroundImageMode.change(layout);
            expect(style.background.url.qStaticContentUrl.qUrl).toEqual("/media/Logo/qlik.png");
            formattedStyle = styleFormatter.getStyles({ style: style, disabled: disabled, theme: theme, element: element, app: app });
            expect(formattedStyle.includes("background-image:")).toBe(false);
            style.background.mode = "media";
            backgroundImageMode.change(layout);
            formattedStyle = styleFormatter.getStyles({ style: style, disabled: disabled, theme: theme, element: element, app: app });
            expect(formattedStyle.includes("background-image:")).toBe(true);
        });
        it("should return specified image url and default image settings", function () {
            style.background.useImage = true;
            style.background.url.qStaticContentUrl = { qUrl: someUrl };
            var formattedStyle = styleFormatter.getStyles({ style: style, disabled: disabled, theme: theme, element: element, app: app });
            expect(formattedStyle.includes("background-image: url('https://localhost".concat(someUrl, "')"))).toBe(true);
            expect(formattedStyle.includes("background-size: auto auto")).toBe(true);
            expect(formattedStyle.includes("background-position: 50% 50%")).toBe(true);
            expect(formattedStyle.includes("background-repeat: no-repeat")).toBe(true);
        });
        it("should return no settings when url is missing", function () {
            style.background.useImage = true;
            style.background.url.qStaticContentUrl = undefined;
            var formattedStyle = styleFormatter.getStyles({ style: style, disabled: disabled, theme: theme, element: element, app: app });
            expect(formattedStyle.includes("background-image:")).toBe(false);
            expect(formattedStyle.includes("background-size:")).toBe(false);
            expect(formattedStyle.includes("background-position:")).toBe(false);
            expect(formattedStyle.includes("background-repeat:")).toBe(false);
        });
        it("should return specified image size when mode is set to media", function () {
            expect(style.background.mode).toEqual("none");
            var formattedStyle = styleFormatter.getStyles({ style: style, disabled: disabled, theme: theme, element: element, app: app });
            expect(formattedStyle.includes("background-size: 100% 100%")).toBe(false);
            style.background = {
                background: {
                    mode: "media",
                    size: "fill",
                    url: {
                        qStaticContentUrl: {
                            qUrl: someUrl,
                        },
                    },
                },
            };
            formattedStyle = styleFormatter.getStyles({ style: style, disabled: disabled, theme: theme, element: element, app: app });
            expect(formattedStyle.includes("background-size: 100% 100%")).toBe(true);
        });
        it("should return specified image position when mode is set to media", function () {
            style.background = {
                mode: "media",
                position: "top-left",
                size: "fill",
                url: {
                    qStaticContentUrl: {
                        qUrl: someUrl,
                    },
                },
            };
            var formattedStyle = styleFormatter.getStyles({ style: style, disabled: disabled, theme: theme, element: element, app: app });
            expect(formattedStyle.includes("background-position: top left")).toBe(true);
        });
        it("should return specified image size", function () {
            style.background = {
                useImage: true,
                size: "fill",
                url: {
                    qStaticContentUrl: {
                        qUrl: someUrl,
                    },
                },
            };
            var formattedStyle = styleFormatter.getStyles({ style: style, disabled: disabled, theme: theme, element: element, app: app });
            expect(formattedStyle.includes("background-size: 100% 100%")).toBe(true);
        });
        it("should return specified image position", function () {
            style.background = {
                useImage: true,
                position: "topLeft",
                url: {
                    qStaticContentUrl: {
                        qUrl: someUrl,
                    },
                },
            };
            var formattedStyle = styleFormatter.getStyles({ style: style, disabled: disabled, theme: theme, element: element, app: app });
            expect(formattedStyle.includes("background-position: 0% 0%")).toBe(true);
        });
        // border
        it("should set border color and width", function () {
            style.border = {
                useBorder: true,
                width: 0.1,
                color: {
                    index: 2,
                },
            };
            theme.getColorPickerColor = jest.fn(function () { return "color2"; });
            var formattedStyle = styleFormatter.getStyles({ style: style, disabled: disabled, theme: theme, element: element, app: app });
            expect(formattedStyle.includes("border: 5px solid color2")).toBe(true);
        });
        it("should set a border based on expression", function () {
            style.border = {
                useBorder: true,
                width: 0.1,
                useColorExpression: true,
                colorExpression: "rebeccapurple",
            };
            var formattedStyle = styleFormatter.getStyles({ style: style, disabled: disabled, theme: theme, element: element, app: app });
            expect(formattedStyle.includes("border: 5px solid rgba(102,51,153,1)")).toBe(true);
        });
        it("should set border radius", function () {
            style.border = {
                useBorder: true,
                radius: 0.2,
            };
            var formattedStyle = styleFormatter.getStyles({ style: style, disabled: disabled, theme: theme, element: element, app: app });
            expect(formattedStyle.includes("border-radius: 10px")).toBe(true);
        });
        it("should set border radius for smaller height", function () {
            element = {
                offsetHeight: 50,
            };
            style.border = {
                useBorder: true,
                radius: 0.2,
            };
            var formattedStyle = styleFormatter.getStyles({ style: style, disabled: disabled, theme: theme, element: element, app: app });
            expect(formattedStyle.includes("border-radius: 5px")).toBe(true);
        });
        it("should not set a border", function () {
            var formattedStyle = styleFormatter.getStyles({ style: style, disabled: disabled, theme: theme, element: element, app: app });
            expect(formattedStyle.includes("border: none")).toBe(true);
        });
    });
    // describe("createLabelAndIcon", () => {
    //   let theme: stardust.Theme;
    //   let button: HTMLElement;
    //   let style: Style;
    //   beforeEach(() => {
    //     const d = defaultValues();
    //     theme = d.theme as unknown as stardust.Theme;
    //     style = d.layout.style;
    //     global.document.createElement = jest.fn(() => {
    //       const newElement = {
    //         setAttribute: () => undefined,
    //         removeAttribute: () => undefined,
    //         firstElementChild: { setAttribute: () => undefined },
    //         style: {},
    //         children: [],
    //       };
    //       newElement.appendChild = (newChild) => {
    //         newElement.children.push(newChild);
    //       };
    //       newElement.insertBefore = (newChild) => {
    //         newElement.children.unshift(newChild);
    //       };
    //       return newElement;
    //     });
    //     button = {
    //       firstElementChild: { setAttribute: jest.fn(), offsetHeight: 400, offsetWidth: 20 },
    //       clientHeight: 100,
    //       clientWidth: 100,
    //       children: [],
    //       appendChild: (child) => {
    //         child.setAttribute = jest.fn();
    //         child.offsetHeight = 400;
    //         child.offsetWidth = 20;
    //         button.children.push(child);
    //       },
    //     };
    //   });
    //   afterEach(() => {
    //     jest.resetAllMocks();
    //   });
    //   describe("font size behavior:", () => {
    //     describe("responsive", () => {
    //       it("should set fontSize and styling when there is no sizeBehavior property", () => {
    //         style.font = {};
    //         styleFormatter.createLabelAndIcon({ theme, button, style });
    //         const text = button.children[0];
    //         expect(text.children[0].textContent).toEqual("Button");
    //         expect(text.style.whiteSpace).toEqual("pre");
    //         expect(text.style.fontFamily).toEqual("Source Sans Pro");
    //         expect(text.style.fontSize).toEqual("11.50px");
    //         expect(text.style.display).toEqual("flex");
    //         expect(text.style.alignItems).toEqual("center");
    //         expect(text.style.justifyContent).toEqual("center");
    //       });
    //       it("should set fontSize and styling", () => {
    //         expect(style.font.sizeBehavior).toBe("responsive");
    //         styleFormatter.createLabelAndIcon({ theme, button, style });
    //         const text = button.children[0];
    //         expect(text.children[0].textContent).toEqual("Button");
    //         expect(text.style.whiteSpace).toEqual("pre");
    //         expect(text.style.fontFamily).toEqual("Source Sans Pro");
    //         expect(text.style.fontSize).toEqual("11.50px");
    //         expect(text.style.display).toEqual("flex");
    //         expect(text.style.alignItems).toEqual("center");
    //         expect(text.style.justifyContent).toEqual("center");
    //       });
    //       it("should set fontSize to 8px for small font sizes", () => {
    //         button.appendChild = (child) => {
    //           child.setAttribute = jest.fn();
    //           child.offsetHeight = 400;
    //           child.offsetWidth = 400;
    //           button.children.push(child);
    //         };
    //         styleFormatter.createLabelAndIcon({ theme, button, style });
    //         expect(button.children[0].style.fontSize).toEqual("8px");
    //       });
    //       it("should set fontSize when text offsetWidth is bigger than button", () => {
    //         button.appendChild = (child) => {
    //           child.setAttribute = jest.fn();
    //           child.offsetHeight = 400;
    //           child.offsetWidth = 125;
    //           button.children.push(child);
    //         };
    //         styleFormatter.createLabelAndIcon({ theme, button, style });
    //         expect(button.children[0].style.fontSize).toEqual("9.20px");
    //       });
    //       it("should set fontSize when italic is selected", () => {
    //         style.font.style = {
    //           italic: true,
    //         };
    //         button.appendChild = (child) => {
    //           child.setAttribute = jest.fn();
    //           child.offsetHeight = 400;
    //           child.offsetWidth = 125;
    //           button.children.push(child);
    //         };
    //         styleFormatter.createLabelAndIcon({ theme, button, style });
    //         expect(button.children[0].style.fontSize).toEqual("9px");
    //       });
    //       it("should place icon first then label inside text element with italics", () => {
    //         style.font.style = {
    //           italic: true,
    //         };
    //         const isSense = true;
    //         style.icon.useIcon = true;
    //         style.icon.iconType = "back";
    //         styleFormatter.createLabelAndIcon({ theme, button, style, isSense });
    //         const text = button.children[0];
    //         expect(text.children[0].style.textDecoration).toEqual("none");
    //         expect(text.children[1].textContent).toEqual("Button");
    //         expect(button.children[0].style.fontSize).toEqual("10.50px");
    //       });
    //     });
    //     describe("relative", () => {
    //       it("adjusts font size to the size of the button", () => {
    //         expect(style.font.size).toBe(0.5);
    //         style.font.sizeBehavior = "relative";
    //         button.clientWidth = 100;
    //         button.clientHeight = 50;
    //         styleFormatter.createLabelAndIcon({ theme, button, style });
    //         expect(button.children[0].style.fontSize).toBe("12.5px");
    //         // change the button size
    //         button.clientWidth = 200;
    //         button.clientHeight = 200;
    //         styleFormatter.createLabelAndIcon({ theme, button, style });
    //         expect(button.children[1].style.fontSize).toBe("25px");
    //       });
    //       it("adjusts font size to the size of the button and text length is not considered", () => {
    //         expect(style.font.size).toBe(0.5);
    //         style.font.sizeBehavior = "relative";
    //         button.clientWidth = 100;
    //         button.clientHeight = 50;
    //         styleFormatter.createLabelAndIcon({ theme, button, style });
    //         expect(button.children[0].style.fontSize).toBe("12.5px");
    //         // change the text offset sizes
    //         button.appendChild = (child) => {
    //           child.setAttribute = jest.fn();
    //           child.offsetHeight = 20;
    //           child.offsetWidth = 400;
    //           button.children.push(child);
    //         };
    //         styleFormatter.createLabelAndIcon({ theme, button, style });
    //         expect(button.children[1].style.fontSize).toBe("12.5px");
    //       });
    //     });
    //     describe("fixed", () => {
    //       it("adjusts font size to the layout default font size", () => {
    //         style.font.sizeBehavior = "fixed";
    //         styleFormatter.createLabelAndIcon({ theme, button, style });
    //         expect(button.children[0].style.fontSize).toBe("20px");
    //         style.font.size = 0.6;
    //         styleFormatter.createLabelAndIcon({ theme, button, style });
    //         expect(button.children[1].style.fontSize).toBe("20px");
    //       });
    //       it("adjusts font size to the layout font size, none of the button or text length is considered", () => {
    //         style.font.sizeBehavior = "fixed";
    //         style.font.sizeFixed = 16;
    //         // change the button client sizes
    //         button.clientWidth = 50;
    //         button.clientHeight = 100;
    //         styleFormatter.createLabelAndIcon({ theme, button, style });
    //         expect(button.children[0].style.fontSize).toBe("16px");
    //         // change the text offset sizes
    //         button.appendChild = (child) => {
    //           child.setAttribute = jest.fn();
    //           child.offsetHeight = 20;
    //           child.offsetWidth = 400;
    //           button.children.push(child);
    //         };
    //         styleFormatter.createLabelAndIcon({ theme, button, style });
    //         expect(button.children[1].style.fontSize).toBe("16px");
    //       });
    //     });
    //   });
    //   it("should place label first then icon inside text element", () => {
    //     const isSense = true;
    //     style.icon.useIcon = true;
    //     style.icon.iconType = "Back";
    //     style.icon.position = "right";
    //     styleFormatter.createLabelAndIcon({ theme, button, style, isSense });
    //     const text = button.children[0];
    //     expect(text.children[0].textContent).toEqual("Button");
    //     expect(text.children[1].style.textDecoration).toEqual("none");
    //     expect(button.children[0].style.fontSize).toEqual("11px");
    //   });
    //   it("should set textDecoration to underline", () => {
    //     style.font.style.underline = true;
    //     styleFormatter.createLabelAndIcon({ theme, button, style });
    //     expect(button.children[0].children[0].style.textDecoration).toEqual("underline");
    //   });
    //   it("should set justifyContent to flex-start", () => {
    //     style.font.align = "left";
    //     styleFormatter.createLabelAndIcon({ theme, button, style });
    //     expect(button.children[0].style.justifyContent).toEqual("flex-start");
    //   });
    //   it("should set justifyContent to flex-end", () => {
    //     style.font.align = "right";
    //     styleFormatter.createLabelAndIcon({ theme, button, style });
    //     expect(button.children[0].style.justifyContent).toEqual("flex-end");
    //   });
    // });
});
