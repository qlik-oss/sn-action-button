import BTNLayout from './button-layout';

export default function init(element, translator, updateRenderState, Theme, senseNavigation) {
  const self = { backendApi: {}, options: {} };
  const props = {};
  self.props = props;

  let verifyDialogTimer;

  const applyHideVerifyDialog = () => {
    updateRenderState('showVerify', false);
  };

  const size = element.getBoundingClientRect();

  self.props.mainValueStyle = {};
  self.props.mainValue = {
    formattedValue: '',
    value: null,
    style: null,
  };

  updateRenderState('showVerify', false);

  props.onShowVerifyDialog = () => {
    if (!props.linkInteractionOn) {
      return;
    }

    updateRenderState('showVerify', true);
    props.updateVerifyDialogFontSize();

    verifyDialogTimer = setTimeout(applyHideVerifyDialog, 3000);
  };

  props.linkToSheet = (sheetId, openInNewTab) => {
    if (!props.linkInteractionOn || props.sheetIsMissing || !props.renderState.showVerify) {
      return;
    }

    if (openInNewTab && senseNavigation && senseNavigation.getUrlForSheet) {
      const url = senseNavigation.getUrlForSheet(sheetId);
      window.open(url);
    } else {
      senseNavigation.goToSheet(sheetId);
    }

    clearTimeout(verifyDialogTimer);
    applyHideVerifyDialog();
  };

  props.updateVerifyDialogFontSize = () => {
    if (props.renderState.showVerify) {
      const layoutInfo = props.verifyDialogLayoutInfo.components[0];
      BTNLayout.checkLayout(props.verifyDialogLayoutInfo);
      BTNLayout.sizeComponent(
        layoutInfo,
        props.verifyDialogLayoutInfo,
        props.verifyDialogLayoutInfo.boundingBox.width,
        props.verifyDialogLayoutInfo.boundingBox.height,
        BTNLayout.TextScaleMode.SCALE,
        BTNLayout.ElementScaleMode.NONE,
        Theme
      );

      props.verifyDialogStyle = {
        fontSize: layoutInfo.fontSizes.fontSize,
      };
    }
  };

  self.props.baseLayoutInfo = {
    direction: BTNLayout.Direction.COLUMN,
    ratio: 1000000000, // TODO - create a row layout
    boundingBox: {
      width: size.width,
      height: size.height,
    },
    components: [
      {
        size: {
          // main title
          min: 0.5,
          treshold: {
            width: 50,
            height: 12,
          },
        },
        getText() {
          return props.measureTitle;
        },
        fontSizes: {
          maxNrChars: 15,
          min: {
            fontSize: 10,
            height: 12,
          },
          max: {
            fontSize: 40,
            height: 80,
          },
        },
        isVisible() {
          return props.showMeasureTitle;
        },
      },
      {
        size: {
          // values wrapper
          min: 0.8,
          stretch: true,
        },
        ratio: 1,
        components: [
          {
            size: {
              // main value
              min: 0.5,
              stretch: true,
            },
            getText() {
              return (
                self.props.mainValue.formattedValue + (self.props.mainValue.glyph ? self.props.mainValue.glyph : '')
              );
            },
            fontSizes: {
              maxNrChars: 4,
              min: {
                fontSize: 10,
                height: 10,
              },
              max: {
                fontSize: 500,
                height: 500,
              },
            },
          },
          {
            size: 0.5, // secondary values
            components: self.props.secondaryLayouts,
            isVisible() {
              return self.props.secondaryLayouts.length > 0;
            },
          },
        ],
      },
    ],
  };

  self.props.secondaryLayoutInfo = {
    size: {
      // secondary wrapper
      min: 1,
      treshold: {
        width: 50,
        height: 30,
      },
    },
    direction: BTNLayout.Direction.COLUMN,
    components: [
      {
        size: {
          // secondary value and glyph
          min: 0.6,
          stretch: true,
        },
        fontSizes: {
          maxNrChars: 8,
          min: {
            fontSize: 10,
            height: 20,
          },
          max: {
            fontSize: 500,
            height: 500,
          },
        },
      },
      {
        size: {
          // secondary title
          min: 0.4,
        },
        fontSizes: {
          maxNrChars: 15,
          min: {
            fontSize: 10,
            height: 20,
          },
          max: {
            fontSize: 30,
            height: 500,
          },
        },
        isVisible() {
          return props.showSecondMeasureTitle !== false;
        },
      },
    ],
  };

  self.props.verifyDialogLayoutInfo = {
    size: {
      min: 1,
      width: 20,
      height: 20,
    },
    boundingBox: {
      width: 0,
      height: 0,
    },
    components: [
      {
        size: {
          // "click again to go to sheet"
          min: 0.2,
          treshold: {
            width: 100,
            height: 100,
          },
        },
        getText() {
          return translator.get('properties.kpi.verifyToGoSheet');
        },
        fontSizes: {
          maxNrChars: 16,
          min: {
            fontSize: 10,
            height: 20,
          },
          max: {
            fontSize: 13,
            height: 50,
          },
        },
      },
      // sheet name is relative to size of "click again" so no need to add it into the layoutInfo
    ],
  };
  return self;
}
