import BTNLayout from '../button-layout';
// import GlyphService from './sense/glyph-service';
// import KPIColoring from './utils/kpi-coloring';
// import getBackgroundColorInfo from './utils/kpi-background-color';
import { getBoundingBox } from './style-utils';

export default function btnStyles(self, element, Theme, bkgColorEnabled, stylingPanelEnabled, muiIconsffEnabled) {
  if (!self.layout) {
    return;
  }

  const size = element.getBoundingClientRect();

  const data = self.layout;
  const { inClient } = self;
  let layoutInfo;
  let valueInfo;

  self.props.linkInteractionOn = inClient && self.navigation && self.layout.useLink && !!self.layout.sheetLink;
  self.props.verifyDialogLayoutInfo.boundingBox.width = size.width;
  self.props.verifyDialogLayoutInfo.boundingBox.height = size.height;
  self.props.baseLayoutInfo.boundingBox = getBoundingBox(self, element);

  BTNLayout.checkLayout(self.props.baseLayoutInfo);
  self.props.baseLayoutInfo.components.forEach((component) => {
    let scaleMode;
    if (data.layoutBehavior === 'fixed') {
      scaleMode = BTNLayout.TextScaleMode.NONE;
    } else {
      scaleMode =
        self.props.secondaryValues.length === 0 && self.maxFontState
          ? BTNLayout.TextScaleMode.MAX
          : BTNLayout.TextScaleMode.SCALE;
    }

    BTNLayout.sizeComponent(
      component,
      self.props.baseLayoutInfo,
      self.props.baseLayoutInfo.boundingBox.width,
      self.props.baseLayoutInfo.boundingBox.height,
      scaleMode,
      self.props.secondaryValues.length === 0 && self.maxFontState
        ? BTNLayout.ElementScaleMode.ADJUSTTOTEXT
        : BTNLayout.ElementScaleMode.NONE,
      Theme
    );
  });

  // main value
  self.props.mainValue.muiIconsffEnabled = muiIconsffEnabled;
  valueInfo = KPIColoring.getValueInfo(self.props.mainValue.value, 0, data, Theme);
  self.props.mainValue.cssClass = GlyphService.getIconClass(valueInfo.icon);
  self.props.mainValue.icon = valueInfo.icon;
  self.props.mainValue.showGlyph = valueInfo.useCondColor && valueInfo?.icon !== '';
  layoutInfo = self.props.baseLayoutInfo.components[1].components[0];

  const mainValueScaledFontSize = layoutInfo.fontSizes.scaledFontSize;
  self.props.mainValue.style = {
    color: valueInfo.color,
    fontSize: layoutInfo.fontSizes.fontSize,
    fontFamily: Theme ? Theme.getStyle('object.sn-action-button', 'label.value', 'fontFamily') : '',
  };

  // // measuretitle
  // layoutInfo = self.props.baseLayoutInfo.components[0];
  // self.props.measureTitleStyle = {
  //   color: Theme ? Theme.getStyle('object.kpi', 'label.name', 'color') : '#595959',
  //   fontSize: layoutInfo.fontSizes.fontSize,
  //   fontFamily: Theme ? Theme.getStyle('object.kpi', 'label.name', 'fontFamily') : '',
  // };

  // secondary values
  // font size should be not larger 50% of the font size of the main value
  // for (let i = 0; i < data.qHyperCube.qMeasureInfo.length - 1; i++) {
  //   layoutInfo = self.props.baseLayoutInfo.components[1].components[1].components[i].components[0];
  //   valueInfo = KPIColoring.getValueInfo(self.props.secondaryValues[i].value, i + 1, data, Theme);
  //   self.props.secondaryValues[i].style = {
  //     color: valueInfo.color,
  //     fontSize: `${Math.min(mainValueScaledFontSize / 2, layoutInfo.fontSizes.scaledFontSize) * 10}%`,
  //   };

  //   layoutInfo = self.props.baseLayoutInfo.components[1].components[1].components[i].components[1];
  //   self.props.secondaryValues[i].titleStyle = {
  //     fontSize: `${Math.min(mainValueScaledFontSize / 2, layoutInfo.fontSizes.scaledFontSize) * 10}%`,
  //   };

  //   if (!layoutInfo.show) {
  //     self.props.secondaryValues[i].titleStyle.width = 0;
  //   }

  //   self.props.secondaryValues[i].muiIconsffEnabled = muiIconsffEnabled;
  //   self.props.secondaryValues[i].cssClass = GlyphService.getIconClass(valueInfo.icon);
  //   self.props.secondaryValues[i].icon = valueInfo.icon;
  //   self.props.secondaryValues[i].showGlyph = valueInfo.useCondColor && valueInfo.icon && valueInfo.icon !== '';
  // }

  self.props.updateVerifyDialogFontSize();

  // if (bkgColorEnabled && (!stylingPanelEnabled || !data.components?.find((comp) => comp.key === 'general')?.bgColor)) {
  //   self.props.backgroundStyle = {
  //     backgroundColor: getBackgroundColorInfo(data, Theme),
  //   };
  // } else {
  //   self.props.backgroundStyle = {
  //     backgroundColor: undefined,
  //   };
  // }

  /* const dfd = Deferred();
  const $timeout = qvangular.getService("$timeout");
  $timeout(
    () => {
      dfd.resolve();
    },
    0,
    false
  );

  return dfd.promise; */
}
