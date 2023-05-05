import colorUtils from "../color-utils";
describe("color-utils", function () {
    describe("resolveExpression", function () {
        it("should resolve color for rgb expression", function () {
            var color = colorUtils.resolveExpression("RGB(255,255,0)");
            expect(color).toEqual("rgb(255,255,0)");
        });
        it("should resolve color for argb expression", function () {
            var color = colorUtils.resolveExpression("ARGB(100,255,255,0)");
            expect(color).toEqual("rgba(255,255,0,0.39)");
        });
        it("should resolve color for hex expression", function () {
            var color = colorUtils.resolveExpression("#123456");
            expect(color).toEqual("#123456");
        });
        it("should resolve color for css color", function () {
            var color = colorUtils.resolveExpression("red");
            expect(color).toEqual("rgba(255,0,0,1)");
        });
        it("should resolve color for css color transparent", function () {
            var color = colorUtils.resolveExpression("transparent");
            expect(color).toEqual("rgba(255,255,255,0)");
        });
        it("should return none for invalid expressions", function () {
            var color = colorUtils.resolveExpression("RGB(asdf)");
            expect(color).toEqual("none");
        });
    });
    describe("getFadedColor", function () {
        it("should not darken #000000", function () {
            var result = colorUtils.getFadedColor("#000000");
            expect(result).toEqual("#000000");
        });
        it("should darken #ffffff to #d9d9d9", function () {
            var result = colorUtils.getFadedColor("#ffffff");
            expect(result).toEqual("#d9d9d9");
        });
        it("should darken rgb(255,255,255) to rgb(217,217,217)", function () {
            var result = colorUtils.getFadedColor("rgb(255,255,255)");
            expect(result).toEqual("rgb(217,217,217)");
        });
        it("should darken rgba(255,255,255,1) to rgba(217,217,217,1)", function () {
            var result = colorUtils.getFadedColor("rgba(255,255,255,1)");
            expect(result).toEqual("rgba(217,217,217,1)");
        });
    });
});
