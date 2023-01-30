import { getFontStyle } from '../style-utils';

describe('style-utils', () => {
  describe('getFontStyle', () => {
    it('should return an object font style when the font style is an object', () => {
      const styleObject = {
        font: {
          style: {
            bold: true,
            italic: false,
            underline: false,
          },
        },
      };
      const { font = {} } = styleObject;
      const fontStyle = getFontStyle(font);
      expect(fontStyle).toEqual(font.style);
    });

    it('should return an object font style when the font style is an array', () => {
      const styleArray = {
        font: {
          style: ['bold', 'italic'],
        },
      };
      const styleObject = { bold: true, italic: true, underline: false };
      const { font = {} } = styleArray;
      const fontStyle = getFontStyle(font);
      expect(fontStyle).toEqual(styleObject);
    });
  });
});
