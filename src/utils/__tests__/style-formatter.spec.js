import styleFormatter from '../style-formatter';
import defaultValues from '../../__tests__/default-button-props';

describe('style-formatter', () => {
  describe('getStyles', () => {
    let style;
    const defaultStyle =
      'width: 100%;height: 100%;transition: transform .1s ease-in-out;position: absolute;bottom: 0;left: 0; top: 0;right: 0;margin: auto;cursor: pointer;color: #ffffff;font-weight: bold;background-color: myPrimaryColor;border: none;';
    const someColor = '#ffff00';
    const someColorExpression = 'rgb(255,255,0)';
    const app = {
      session: {
        config: {
          url: 'wss://localhost/app/12345-5678',
        },
      },
    };
    const someUrl = '/media/Logo/qlik.png';
    let theme;
    let layout;
    const disabled = false;
    let element;
    beforeEach(() => {
      const d = defaultValues();
      theme = d.theme;
      layout = d.layout;
      style = JSON.parse(JSON.stringify(layout.style));
      element = {
        offsetHeight: 200,
        offsetWidth: 100,
      };
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it('should return default styling', () => {
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme, app });
      expect(formattedStyle).toEqual(defaultStyle);
    });
    // enable
    it('should have set opacity and cursor for disabled button', () => {
      const formattedStyle = styleFormatter.getStyles({ style, disabled: true, theme, app });
      expect(formattedStyle.includes('opacity: 0.4')).toBe(true);
      expect(formattedStyle.includes('cursor: pointer')).toBe(false);
    });

    it('should not have set opacity for enabled button', () => {
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme, app });
      expect(formattedStyle.includes('opacity: 0.4')).toBe(false);
    });
    // font
    it('should return specified font color', () => {
      style.font.color = someColor;
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme, app });
      expect(formattedStyle.includes(`color: ${someColor}`)).toBe(true);
    });

    it('should return specified font color from expression', () => {
      style.font.colorExpression = someColorExpression;
      style.font.useColorExpression = true;
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme, app });
      expect(formattedStyle.includes(`color: ${someColorExpression}`)).toBe(true);
    });

    it('should return font-weight: bold when bold is selected', () => {
      style.font.style = {
        bold: true,
      };
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme, app });
      expect(formattedStyle.includes('font-weight: bold')).toBe(true);
    });

    it('should return font-style: italic when italic is selected', () => {
      style.font.style = {
        italic: true,
      };
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme, app });
      expect(formattedStyle.includes('font-style: italic')).toBe(true);
    });
    // background
    it('should return specified background color', () => {
      style.background.color = someColor;
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme, app });
      expect(formattedStyle.includes(`background-color: ${someColor}`)).toBe(true);
    });

    it('should return specified background color from expression', () => {
      style.background.colorExpression = someColorExpression;
      style.background.useColorExpression = true;
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme, app });
      expect(formattedStyle.includes(`background-color: ${someColorExpression}`)).toBe(true);
    });

    it('should return default background color when color is none', () => {
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme, app });
      expect(formattedStyle.includes('background-color: myPrimaryColor')).toBe(true);
    });

    it('should return specified image url and default image settings', () => {
      style.background.useImage = true;
      style.background.url.qStaticContentUrl = { qUrl: someUrl };
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme, app });
      expect(formattedStyle.includes(`background-image: url('https://localhost${someUrl}')`)).toBe(true);
      expect(formattedStyle.includes('background-size: auto auto')).toBe(true);
      expect(formattedStyle.includes('background-position: 50% 50%')).toBe(true);
      expect(formattedStyle.includes('background-repeat: no-repeat')).toBe(true);
    });

    it('should return no settings when url is missing', () => {
      style.background.useImage = true;
      style.background.url.qStaticContentUrl = {};
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme, app });
      expect(formattedStyle.includes('background-image:')).toBe(false);
      expect(formattedStyle.includes('background-size:')).toBe(false);
      expect(formattedStyle.includes('background-position:')).toBe(false);
      expect(formattedStyle.includes('background-repeat:')).toBe(false);
    });

    it('should return specified image size', () => {
      style.background = {
        useImage: true,
        size: 'fill',
        url: {
          qStaticContentUrl: {
            qUrl: someUrl,
          },
        },
      };
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme, app });
      expect(formattedStyle.includes('background-size: 100% 100%')).toBe(true);
    });

    it('should return specified image position', () => {
      style.background = {
        useImage: true,
        position: 'topLeft',
        url: {
          qStaticContentUrl: {
            qUrl: someUrl,
          },
        },
      };
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme, app });
      expect(formattedStyle.includes('background-position: 0% 0%')).toBe(true);
    });
    // border
    it('should set border color and width', () => {
      style.border = {
        useBorder: true,
        width: 0.1,
        color: {
          index: 2,
        },
      };
      theme.getColorPickerColor = jest.fn(() => 'color2');
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme, element, app });
      expect(formattedStyle.includes('border: 5px solid color2')).toBe(true);
    });

    it('should set a border based on expression', () => {
      style.border = {
        useBorder: true,
        width: 0.1,
        useColorExpression: true,
        colorExpression: 'rebeccapurple',
      };
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme, element, app });
      expect(formattedStyle.includes('border: 5px solid rgba(102,51,153,1)')).toBe(true);
    });

    it('should set border radius', () => {
      style.border = {
        useBorder: true,
        radius: 0.2,
      };
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme, element, app });
      expect(formattedStyle.includes('border-radius: 10px')).toBe(true);
    });

    it('should set border radius for smaller height', () => {
      element.offsetHeight = 50;
      style.border = {
        useBorder: true,
        radius: 0.2,
      };
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme, element, app });
      expect(formattedStyle.includes('border-radius: 5px')).toBe(true);
    });

    it('should not set a border', () => {
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme, app });
      expect(formattedStyle.includes('border: none')).toBe(true);
    });
  });

  describe('createLabelAndIcon', () => {
    let theme;
    let button;
    let style;

    beforeEach(() => {
      const d = defaultValues();
      theme = d.theme;
      style = d.layout.style;

      global.document.createElement = jest.fn(() => {
        const newElement = {
          setAttribute: () => {},
          removeAttribute: () => {},
          firstElementChild: { setAttribute: () => {} },
          style: {},
          children: [],
          getContext: () => ({
            measureText: () => ({ width: 8 }),
          }),
        };
        newElement.appendChild = (newChild) => {
          newElement.children.push(newChild);
        };
        newElement.insertBefore = (newChild) => {
          newElement.children.unshift(newChild);
        };
        return newElement;
      });

      button = {
        firstElementChild: { setAttribute: jest.fn(), offsetHeight: 400, offsetWidth: 20 },
        clientHeight: 100,
        clientWidth: 100,
        children: [],
        appendChild: (child) => {
          child.setAttribute = jest.fn();
          child.offsetHeight = 400;
          child.offsetWidth = 20;
          button.children.push(child);
        },
      };
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it('should set fontSize and styling', () => {
      theme.getStyle = jest.fn(() => 'myFont');
      styleFormatter.createLabelAndIcon({ theme, button, style });
      const text = button.children[0];
      expect(text.children[0].textContent).toEqual('Button');
      expect(text.style.whiteSpace).toEqual('pre');
      expect(text.style.fontFamily).toEqual('myFont');
      expect(text.style.fontSize).toEqual('11.5px');
      expect(text.style.display).toEqual('flex');
      expect(text.style.alignItems).toEqual('center');
      expect(text.style.justifyContent).toEqual('center');
    });

    it('should set fontSize to 8px for small font sizes', () => {
      button.appendChild = (child) => {
        child.setAttribute = jest.fn();
        child.offsetHeight = 400;
        child.offsetWidth = 400;
        button.children.push(child);
      };
      styleFormatter.createLabelAndIcon({ theme, button, style });
      expect(button.children[0].style.fontSize).toEqual('8px');
    });

    it('should set fontSize when text offsetWidth is bigger than button', () => {
      button.appendChild = (child) => {
        child.setAttribute = jest.fn();
        child.offsetHeight = 400;
        child.offsetWidth = 125;
        button.children.push(child);
      };
      styleFormatter.createLabelAndIcon({ theme, button, style });
      expect(button.children[0].style.fontSize).toEqual('9.200000000000001px');
    });

    it('should use default fixed font size when size behavior is fixed', () => {
      button.appendChild = (child) => {
        child.setAttribute = jest.fn();
        child.offsetHeight = 400;
        child.offsetWidth = 400;
        button.children.push(child);
      };
      style.font.sizeBehavior = 'fixed';
      styleFormatter.createLabelAndIcon({ theme, button, style });
      expect(button.children[0].style.fontSize).toEqual('20px');
    });

    it('should use fixed font size when size behavior is fixed', () => {
      button.appendChild = (child) => {
        child.setAttribute = jest.fn();
        child.offsetHeight = 400;
        child.offsetWidth = 400;
        button.children.push(child);
      };
      style.font.sizeBehavior = 'fixed';
      style.font.sizeFixed = 16;
      styleFormatter.createLabelAndIcon({ theme, button, style });
      expect(button.children[0].style.fontSize).toEqual('16px');
    });

    it('should set fontSize when italic is selected', () => {
      style.font.style = {
        italic: true,
      };
      button.appendChild = (child) => {
        child.setAttribute = jest.fn();
        child.offsetHeight = 400;
        child.offsetWidth = 125;
        button.children.push(child);
      };
      styleFormatter.createLabelAndIcon({ theme, button, style });
      expect(button.children[0].style.fontSize).toEqual('9px');
    });

    it('should place icon first then label inside text element with italics', () => {
      style.font.style = {
        italic: true,
      };
      const isSense = true;
      style.icon.useIcon = true;
      style.icon.iconType = 'back';
      styleFormatter.createLabelAndIcon({ theme, button, style, isSense });
      const text = button.children[0];
      expect(text.children[0].style.textDecoration).toEqual('none');
      expect(text.children[1].textContent).toEqual('Button');
      expect(button.children[0].style.fontSize).toEqual('10.5px');
    });

    it('should place label first then icon inside text element', () => {
      const isSense = true;
      style.icon.useIcon = true;
      style.icon.iconType = 'Back';
      style.icon.position = 'right';
      styleFormatter.createLabelAndIcon({ theme, button, style, isSense });
      const text = button.children[0];
      expect(text.children[0].textContent).toEqual('Button');
      expect(text.children[1].style.textDecoration).toEqual('none');
      expect(button.children[0].style.fontSize).toEqual('11px');
    });

    it('should set textDecoration to underline', () => {
      style.font.style.underline = true;
      styleFormatter.createLabelAndIcon({ theme, button, style });
      expect(button.children[0].children[0].style.textDecoration).toEqual('underline');
    });

    it('should set justifyContent to flex-start', () => {
      style.font.align = 'left';
      styleFormatter.createLabelAndIcon({ theme, button, style });
      expect(button.children[0].style.justifyContent).toEqual('flex-start');
    });

    it('should set justifyContent to flex-end', () => {
      style.font.align = 'right';
      styleFormatter.createLabelAndIcon({ theme, button, style });
      expect(button.children[0].style.justifyContent).toEqual('flex-end');
    });
  });
});
