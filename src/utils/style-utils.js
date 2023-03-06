export const FONT_FAMILIES = [
  'American Typewriter, serif',
  'Andalé Mono, monospace',
  'Arial Black, sans-serif',
  'Arial, sans-serif',
  'Bradley Hand, cursive',
  'Brush Script MT, cursive',
  'Comic Sans MS, cursive',
  'Courier, monospace',
  'Didot, serif',
  'Georgia, serif',
  'Impact, sans-serif',
  'Lucida Console, monospace',
  'Luminari, fantasy',
  'Monaco, monospace',
  'QlikView Sans, sans-serif',
  'Source Sans Pro, sans-serif',
  'Tahoma, sans-serif',
  'Times New Roman, serif',
  'Trebuchet MS, sans-serif',
  'Verdana, sans-serif',
];

export const backgroundSize = {
  auto: 'auto auto',
  alwaysFit: 'contain',
  fitWidth: '100% auto',
  fitHeight: 'auto 100%',
  fill: '100% 100%',
  alwaysFill: 'cover',
};

export const backgroundPosition = {
  'top-left': 'top left',
  'center-left': 'center left',
  'bottom-left': 'bottom left',
  'top-center': 'top center',
  'center-center': 'center center',
  'bottom-center': 'bottom center',
  'top-right': 'top right',
  'center-right': 'center right',
  'bottom-right': 'bottom right',
  topLeft: '0% 0%', // top left
  centerLeft: '50% 0%', // center left
  bottomLeft: '100% 0%', // bottom left
  topCenter: '0% 50%', // top center
  centerCenter: '50% 50%', // center center
  bottomCenter: '100% 50%', // bottom center
  topRight: '0% 100%', // top right
  centerRight: '50% 100%', // center right
  bottomRight: '100% 100%', // bottom right
};

export const colorOptions = [
  {
    value: false,
    translation: 'properties.colorMode.primary',
  },
  {
    value: true,
    translation: 'properties.colorMode.byExpression',
  },
];

export const toggleOptions = [
  {
    value: true,
    translation: 'properties.on',
  },
  {
    value: false,
    translation: 'properties.off',
  },
];

const getFirstFont = (s) => s.split(',')[0];
export const fontFamilyOptions = FONT_FAMILIES.map((font) => ({
  value: font,
  label: getFirstFont(font),
}));

export function getBaseFonts() {
  const baseFontSizeSmall = 7;
  const baseFontSizeMedium = 4;
  const baseFontSizeLarge = 3;
  const fixedFontGap = 1.5; // To reach the desired outcome, the difference between the L fonts with the rest was bigger than the difference between M and S
  return {
    font: {
      baseFontSizeSmall,
      baseFontSizeMedium,
      baseFontSizeLarge,
    },
    layout: {
      responsive: {
        S: baseFontSizeSmall,
        M: baseFontSizeMedium,
        L: baseFontSizeLarge,
      },
      relative: {
        S: baseFontSizeSmall * fixedFontGap,
        M: baseFontSizeMedium * fixedFontGap,
        L: baseFontSizeLarge,
      },
      fixed: {
        S: baseFontSizeSmall * fixedFontGap,
        M: baseFontSizeMedium * fixedFontGap,
        L: baseFontSizeLarge,
      },
    },
  };
}

export function getBoundingBox(self, element) {
  const isSnapshotLockedMode = self.layout && self.layout.snapshotData && !self.options.freeResize;

  if (isSnapshotLockedMode && self.layout.snapshotData.elementRatio) {
    // KPI Snapshot object not in free resize mode
    return {
      // This "forces" away the responsive behavior
      width: self.layout.snapshotData.object.size.w,
      height: self.layout.snapshotData.object.size.w * self.layout.snapshotData.elementRatio,
    };
  }

  const size = element.getBoundingClientRect();
  return {
    width: size.width,
    height: size.height,
  };
}

export function btnLayoutStyles(self, element, Theme, bkgColorEnabled, stylingPanelEnabled, muiIconsffEnabled) {
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

  // const mainValueScaledFontSize = layoutInfo.fontSizes.scaledFontSize;
  // self.props.mainValue.style = {
  //   color: valueInfo.color,
  //   fontSize: layoutInfo.fontSizes.fontSize,
  //   fontFamily: Theme ? Theme.getStyle('object.sn-action-button', 'label.value', 'fontFamily') : '',
  // };

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

// export function getBoundingBox(self, $element) {
//   const isSnapshotLockedMode = self.layout && self.layout.snapshotData && !self.options.freeResize;

//   if (isSnapshotLockedMode && self.layout.snapshotData.elementRatio) {
//     return {
//       // This "forces" away the responsive behavior
//       width: self.layout.snapshotData.object.size.w,
//       height: self.layout.snapshotData.object.size.w * self.layout.snapshotData.elementRatio,
//     };
//   }

//   const size = $element.getBoundingClientRect();
//   return {
//     width: size.width,
//     height: size.height,
//   };
// }

// const layoutBehavior = data.layoutBehavior || 'responsive';
// const scopeLabelComponent = self.props.baseLayoutInfo.components[0];
// const scopeValueComponent = self.props.baseLayoutInfo.components[1];
// if (layoutBehavior === 'fixed') {
//   // In fixed font size behavior, the label needs to take fontSize (S, M, L) into account
//   scopeLabelComponent.fontSizes.maxNrChars = baseFontSizes.layout[layoutBehavior][data.fontSize] * fixedLabelScale;
//   scopeValueComponent.components[0].fontSizes.maxNrChars = baseFontSizes.layout[layoutBehavior][data.fontSize];
// } else if (layoutBehavior === 'relative') {
//   scopeLabelComponent.fontSizes.maxNrChars = baseFontSizes.font.baseFontSizeMedium * fixedLabelScale; // Label is not affected by fontSize
//   scopeValueComponent.components[0].fontSizes.maxNrChars = baseFontSizes.layout[layoutBehavior][data.fontSize];
// } else {
//   scopeLabelComponent.fontSizes.maxNrChars = baseFontSizes.font.baseFontSizeMedium * fixedLabelScale; // Label is not affected by fontSize
//   // To fix QLIK-89656: set maxNrChars to 0 so the font size of the main measure value is based on the formatted value
//   scopeValueComponent.components[0].fontSizes.maxNrChars = 0;
// }
