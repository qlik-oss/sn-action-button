import styleFormatter from '../style-formatter';
import defaultValues from '../../__tests__/default-button-props';

describe('style-formatter', () => {
  let sandbox;
  before(() => {
    sandbox = sinon.createSandbox();
  });
  afterEach(() => {
    sandbox.reset();
  });

  describe('getStyles', () => {
    let style;
    const defaultStyle =
      'width: 100%;height: 100%;transition: transform .1s ease-in-out;position: absolute;cursor: pointer;color: #ffffff;font-weight: bold;background-color: myPrimaryColor;border: none;';
    const someColor = '#ffff00';
    const someColorExpression = 'rgb(255,255,0)';
    const someUrl = '/media/Logo/qlik.png';
    let theme;
    let layout;
    before(() => {
      const d = defaultValues(sandbox);
      theme = d.theme;
      layout = d.layout;
    });
    const disabled = false;
    let element;

    global.document = {
      createElement: () => {
        const newElement = {
          setAttribute: () => {},
          removeAttribute: () => {},
          firstElementChild: { setAttribute: () => {} },
          style: {},
          children: [],
        };
        newElement.appendChild = (newChild) => {
          newElement.children.push(newChild);
        };
        newElement.insertBefore = (newChild) => {
          newElement.children.unshift(newChild);
        };
        return newElement;
      },
    };

    beforeEach(() => {
      style = JSON.parse(JSON.stringify(layout.style));
      element = {
        offsetHeight: 200,
        offsetWidth: 100,
      };
    });

    it('should return default styling', () => {
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme });
      expect(formattedStyle).to.equal(defaultStyle);
    });
    // enable
    it('should have set opacity and cursor for disabled button', () => {
      const formattedStyle = styleFormatter.getStyles({ style, disabled: true, theme });
      expect(formattedStyle.includes('opacity: 0.4')).to.be.true;
      expect(formattedStyle.includes('cursor: pointer')).to.be.false;
    });

    it('should not have set opacity for enabled button', () => {
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme });
      expect(formattedStyle.includes('opacity: 0.4')).to.be.false;
    });
    // font
    it('should return specified font color', () => {
      style.font.color = someColor;
      theme.getColorPickerColor.withArgs(someColor).returns(someColor);
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme });
      expect(formattedStyle.includes(`color: ${someColor}`)).to.be.true;
    });

    it('should return specified font color from expression', () => {
      style.font.colorExpression = someColorExpression;
      style.font.useColorExpression = true;
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme });
      expect(formattedStyle.includes(`color: ${someColorExpression}`)).to.be.true;
    });

    it('should return font-weight: bold when bold is selected', () => {
      style.font.style = {
        bold: true,
      };
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme });
      expect(formattedStyle.includes('font-weight: bold')).to.be.true;
    });

    it('should return font-style: italic when italic is selected', () => {
      style.font.style = {
        italic: true,
      };
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme });
      expect(formattedStyle.includes('font-style: italic')).to.be.true;
    });
    // background
    it('should return specified background color', () => {
      style.background.color = someColor;
      theme.getColorPickerColor.withArgs(someColor).returns(someColor);
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme });
      expect(formattedStyle.includes(`background-color: ${someColor}`)).to.be.true;
    });

    it('should return specified background color from expression', () => {
      style.background.colorExpression = someColorExpression;
      style.background.useColorExpression = true;
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme });
      expect(formattedStyle.includes(`background-color: ${someColorExpression}`)).to.be.true;
    });

    it('should return default background color when color is none', () => {
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme });
      expect(formattedStyle.includes('background-color: myPrimaryColor')).to.be.true;
    });

    it('should return specified image url and default image settings', () => {
      style.background.useImage = true;
      style.background.url.qStaticContentUrl = { qUrl: someUrl };
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme });
      expect(formattedStyle.includes(`background-image: url('..${someUrl}')`)).to.be.true;
      expect(formattedStyle.includes('background-size: auto auto')).to.be.true;
      expect(formattedStyle.includes('background-position: 50% 50%')).to.be.true;
      expect(formattedStyle.includes('background-repeat: no-repeat')).to.be.true;
    });

    it('should return no settings when url is missing', () => {
      style.background.useImage = true;
      style.background.url.qStaticContentUrl = {};
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme });
      expect(formattedStyle.includes('background-image:')).to.be.false;
      expect(formattedStyle.includes('background-size:')).to.be.false;
      expect(formattedStyle.includes('background-position:')).to.be.false;
      expect(formattedStyle.includes('background-repeat:')).to.be.false;
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
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme });
      expect(formattedStyle.includes('background-size: 100% 100%')).to.be.true;
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
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme });
      expect(formattedStyle.includes('background-position: 0% 0%')).to.be.true;
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
      theme.getColorPickerColor.withArgs(style.border.color).returns('color2');
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme, element });
      expect(formattedStyle.includes('border: 5px solid color2')).to.be.true;
    });

    it('should set a border based on expression', () => {
      style.border = {
        useBorder: true,
        width: 0.1,
        useColorExpression: true,
        colorExpression: 'rebeccapurple',
      };
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme, element });
      expect(formattedStyle.includes('border: 5px solid rgba(102,51,153,1)')).to.be.true;
    });

    it('should set border radius', () => {
      style.border = {
        useBorder: true,
        radius: 0.2,
      };
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme, element });
      expect(formattedStyle.includes('border-radius: 10px')).to.be.true;
    });

    it('should set border radius for smaller height', () => {
      element.offsetHeight = 50;
      style.border = {
        useBorder: true,
        radius: 0.2,
      };
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme, element });
      expect(formattedStyle.includes('border-radius: 5px')).to.be.true;
    });

    it('should not set a border', () => {
      const formattedStyle = styleFormatter.getStyles({ style, disabled, theme });
      expect(formattedStyle.includes('border: none')).to.be.true;
    });
  });

  describe('createLabelAndIcon', () => {
    let theme;
    let button;
    let style;

    beforeEach(() => {
      const d = defaultValues(sandbox);
      theme = d.theme;
      style = d.layout.style;

      button = {
        firstElementChild: { setAttribute: sinon.spy(), offsetHeight: 400, offsetWidth: 20 },
        clientHeight: 100,
        clientWidth: 100,
        children: [],
        appendChild: (child) => {
          child.setAttribute = sinon.spy();
          child.offsetHeight = 400;
          child.offsetWidth = 20;
          button.children.push(child);
        },
      };
    });

    it('should set fontSize and styling', () => {
      theme.getStyle.withArgs('', '', 'fontFamily').returns('myFont');
      styleFormatter.createLabelAndIcon({ theme, button, style });
      const text = button.children[0];
      expect(text.children[0].textContent).to.equal('Button');
      expect(text.style.whiteSpace).to.equal('nowrap');
      expect(text.style.fontFamily).to.equal('myFont');
      expect(text.style.fontSize).to.equal('11.5px');
      expect(text.style.display).to.equal('flex');
      expect(text.style.alignItems).to.equal('center');
      expect(text.style.justifyContent).to.equal('center');
    });

    it('should set fontSize to 8px for small font sizes', () => {
      button.appendChild = (child) => {
        child.setAttribute = sinon.spy();
        child.offsetHeight = 400;
        child.offsetWidth = 400;
        button.children.push(child);
      };
      styleFormatter.createLabelAndIcon({ theme, button, style });
      expect(button.children[0].style.fontSize).to.equal('8px');
    });

    it('should set fontSize when text offsetWidth is bigger than button', () => {
      button.appendChild = (child) => {
        child.setAttribute = sinon.spy();
        child.offsetHeight = 400;
        child.offsetWidth = 125;
        button.children.push(child);
      };
      styleFormatter.createLabelAndIcon({ theme, button, style });
      expect(button.children[0].style.fontSize).to.equal('9.200000000000001px');
    });

    it('should set fontSize when italic is selected', () => {
      style.font.style = {
        italic: true,
      };
      button.appendChild = (child) => {
        child.setAttribute = sinon.spy();
        child.offsetHeight = 400;
        child.offsetWidth = 125;
        button.children.push(child);
      };
      styleFormatter.createLabelAndIcon({ theme, button, style });
      expect(button.children[0].style.fontSize).to.equal('9px');
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
      expect(text.children[0].style.textDecoration).to.equal('none');
      expect(text.children[1].textContent).to.equal('Button');
      expect(button.children[0].style.fontSize).to.equal('10.5px');
    });

    it('should place label first then icon inside text element', () => {
      const isSense = true;
      style.icon.useIcon = true;
      style.icon.iconType = 'Back';
      style.icon.position = 'right';
      styleFormatter.createLabelAndIcon({ theme, button, style, isSense });
      const text = button.children[0];
      expect(text.children[0].textContent).to.equal('Button');
      expect(text.children[1].style.textDecoration).to.equal('none');
      expect(button.children[0].style.fontSize).to.equal('11px');
    });

    it('should set textDecoration to underline', () => {
      style.font.style.underline = true;
      styleFormatter.createLabelAndIcon({ theme, button, style });
      expect(button.children[0].children[0].style.textDecoration).to.equal('underline');
    });

    it('should set justifyContent to flex-start', () => {
      style.font.align = 'left';
      styleFormatter.createLabelAndIcon({ theme, button, style });
      expect(button.children[0].style.justifyContent).to.equal('flex-start');
    });

    it('should set justifyContent to flex-end', () => {
      style.font.align = 'right';
      styleFormatter.createLabelAndIcon({ theme, button, style });
      expect(button.children[0].style.justifyContent).to.equal('flex-end');
    });
  });
});
