import "@testing-library/jest-dom";
beforeEach(function () {
    var context = {
        measureText: function (text) {
            var _a;
            return {
                width: (_a = text === null || text === void 0 ? void 0 : text.length) !== null && _a !== void 0 ? _a : 0,
            };
        },
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        set font(f) { },
    };
    jest.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(context);
});
