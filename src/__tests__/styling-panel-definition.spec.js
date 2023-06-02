import objectProperties from "../object-properties";
import { getStylingPanelDefinition } from "../styling-panel-definition";

describe("getStylingPanelDefinition", () => {
  let data;
  const props = getStylingPanelDefinition({ flags: {}, theme: {}, translator: {} });
  const { labelItem } = props.items.styleEditor.items.labelSection.items;

  describe("show functions", () => {
    beforeEach(() => {
      data = JSON.parse(JSON.stringify(objectProperties));
    });

    it("should return true for fontSize and false for fontSizeFixed when relative font size", () => {
      data.style.font.sizeBehavior = "relative";
      expect(labelItem.items.fontSize.show(data)).toBe(true);
      expect(labelItem.items.fontSizeFixed.show(data)).toBe(false);
    });

    it("should return false for fontSize and true for fontSizeFixed when fixed font size", () => {
      data.style.font.sizeBehavior = "fixed";
      expect(labelItem.items.fontSize.show(data)).toBe(false);
      expect(labelItem.items.fontSizeFixed.show(data)).toBe(true);
    });
  });
});
