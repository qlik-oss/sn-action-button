import colorUtils from "../color-utils";

describe("color-utils", () => {
  describe("resolveExpression", () => {
    it("should resolve color for rgb expression", () => {
      const color = colorUtils.resolveExpression("RGB(255,255,0)");
      expect(color).toEqual("rgb(255,255,0)");
    });
    it("should resolve color for argb expression", () => {
      const color = colorUtils.resolveExpression("ARGB(100,255,255,0)");
      expect(color).toEqual("rgba(255,255,0,0.39)");
    });
    it("should resolve color for hex expression", () => {
      const color = colorUtils.resolveExpression("#123456");
      expect(color).toEqual("#123456");
    });
    it("should resolve color for css color", () => {
      const color = colorUtils.resolveExpression("red");
      expect(color).toEqual("rgba(255,0,0,1)");
    });
    it("should resolve color for css color transparent", () => {
      const color = colorUtils.resolveExpression("transparent");
      expect(color).toEqual("rgba(255,255,255,0)");
    });
    it("should return none for invalid expressions", () => {
      const color = colorUtils.resolveExpression("RGB(asdf)");
      expect(color).toEqual("none");
    });
  });
  describe("getFadedColor", () => {
    it("should not darken #000000", () => {
      const result = colorUtils.getFadedColor("#000000");
      expect(result).toEqual("#000000");
    });
    it("should darken #ffffff to #d9d9d9", () => {
      const result = colorUtils.getFadedColor("#ffffff");
      expect(result).toEqual("#d9d9d9");
    });
    it("should darken rgb(255,255,255) to rgb(217,217,217)", () => {
      const result = colorUtils.getFadedColor("rgb(255,255,255)");
      expect(result).toEqual("rgb(217,217,217)");
    });
    it("should darken rgba(255,255,255,1) to rgba(217,217,217,1)", () => {
      const result = colorUtils.getFadedColor("rgba(255,255,255,1)");
      expect(result).toEqual("rgba(217,217,217,1)");
    });
  });
});
