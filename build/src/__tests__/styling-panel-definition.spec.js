import objectProperties from "../object-properties";
import { getStylingPanelDefinition } from "../styling-panel-definition";
describe("getStylingPanelDefinition", function () {
    var data;
    var props = getStylingPanelDefinition();
    var labelItem = props.items.styleEditor.items.labelSection.items.labelItem;
    describe("show functions", function () {
        beforeEach(function () {
            data = JSON.parse(JSON.stringify(objectProperties));
        });
        it("should return true for fontSize and false for fontSizeFixed when relative font size", function () {
            data.style.font.sizeBehavior = "relative";
            expect(labelItem.items.fontSize.show(data)).toBe(true);
            expect(labelItem.items.fontSizeFixed.show(data)).toBe(false);
        });
        it("should return false for fontSize and true for fontSizeFixed when fixed font size", function () {
            data.style.font.sizeBehavior = "fixed";
            expect(labelItem.items.fontSize.show(data)).toBe(false);
            expect(labelItem.items.fontSizeFixed.show(data)).toBe(true);
        });
    });
});
