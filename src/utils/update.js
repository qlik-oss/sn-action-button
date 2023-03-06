import { getBaseFonts } from './style-utils';

export default function updateData(data) {
  if (!isValid(data)) {
    return false;
  }

  self.layout = data;

  const fixedLabelScale = 3.75; // the difference between the KPI value and label when fixedFontSize has been chosen
  const baseFontSizes = getBaseFonts(); // gets the values of the font sizes and font layouts
  // const dataPage = data.qHyperCube.qDataPages[0].qMatrix[0];
  // const numMeasures = data.qHyperCube.qMeasureInfo.length;
  // const { inClient, formatters } = self;
  // const numSecMeasures = numMeasures - 1;
  // const { secondaryValues } = self.props;
  // let secValue;
  // const { secondaryLayouts } = self.props;
  // let secInfo;
  // let secText;
  // let secFormText;
  // let secNum;
  // let secTitle;
  // const currentSheetTitle =
  //   self.props.sheet && self.props.sheet.qMetaDef && self.props.sheet.qMetaDef.title
  //     ? self.props.sheet.qMetaDef.title
  //     : null;

  // const getSecondaryText = () => secFormText;
  // const getSecondaryTitle = () => secTitle;

  // self.props.showMeasureTitle = data.showMeasureTitle;
  // self.props.showSecondMeasureTitle = data.showSecondMeasureTitle;
  // self.props.textAlign = data.textAlign || 'center';

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

  // // To fix QLIK-90264: take fontSize (S, M, L) into account
  // const largeOverSmall = 7 / 3; // largeOverMedium and mediumOverSmall should be Math.sqrt( largeOverSmall )

  // scopeValueComponent.components[0].fontSizes.scale =
  //   data.fontSize === 'S' ? largeOverSmall : data.fontSize === 'L' ? 1 : Math.sqrt(largeOverSmall);

  // self.props.useLink = data.useLink;
  // if (
  //   inClient &&
  //   !data.snapshotData &&
  //   self.props.useLink &&
  //   data.sheetLink &&
  //   (!currentSheetTitle || data.sheetLink !== currentSheetTitle)
  // ) {
  //   updateSheetTitle(self, data.sheetLink, app, translator);
  // }
  // self.props.mainValue.value = data.qHyperCube.qDataPages[0].qMatrix[0][0].qNum;
  // self.props.mainValue.formattedValue =
  //   formatters[0] && formatters[0].type === 'U' && !Number.isNaN(+data.qHyperCube.qDataPages[0].qMatrix[0][0].qNum)
  //     ? formatters[0].formatValue(self.props.mainValue.value)
  //     : data.qHyperCube.qDataPages[0].qMatrix[0][0].qText;
  // self.props.mainValue.formatter = formatters[0];

  // // add custom tooltip for main node here
  // if (models?.customTooltipService.isEnabled()) {
  //   self.props.mainValue.customTooltipAttrExps = customTooltipNodes.getNode(self.layout, {
  //     measureIndex: 0,
  //     d: data.qHyperCube.qDataPages[0].qMatrix[0][0],
  //   });
  // }

  // // add secondary values
  // for (let i = 0; i < numSecMeasures; i++) {
  //   secText = dataPage[i + 1].qText;
  //   secNum = dataPage[i + 1].qNum;
  //   secFormText =
  //     !formatters[i + 1] || formatters[i + 1].type !== 'U' || Number.isNaN(+secNum)
  //       ? secText
  //       : formatters[i + 1].formatValue(secNum);
  //   secTitle = data.qHyperCube.qMeasureInfo[i + 1].qFallbackTitle;

  //   if (!secondaryValues[i]) {
  //     secInfo = createSecondaryValue(getSecondaryText, getSecondaryTitle, self.props.secondaryLayoutInfo);
  //     secValue = {
  //       style: secInfo.layoutInfo.components[0].fontSizes.value,
  //       titleStyle: secInfo.layoutInfo.components[1].fontSizes.value,
  //     };
  //     secondaryValues.push(secValue);
  //     secondaryLayouts.push(secInfo.layoutInfo);
  //   }
  //   secValue = secondaryValues[i];
  //   secValue.value = secNum;
  //   secValue.formattedValue = secFormText;
  //   secValue.formatter = formatters[i + 1];
  //   secValue.measureTitle = secTitle;

  //   const scopeSecondaryValueComponent = secondaryLayouts[i].components[0];
  //   const scopeSecondaryLabelComponent = secondaryLayouts[i].components[1];
  //   if (layoutBehavior === 'fixed') {
  //     // In fixed font size behavior, the label needs to take fontSize (S, M, L) into account
  //     scopeSecondaryValueComponent.fontSizes.maxNrChars = baseFontSizes.layout[layoutBehavior][data.fontSize] * 2;
  //     scopeSecondaryLabelComponent.fontSizes.maxNrChars =
  //       baseFontSizes.layout[layoutBehavior][data.fontSize] * fixedLabelScale;
  //   } else {
  //     scopeSecondaryValueComponent.fontSizes.maxNrChars = baseFontSizes.layout[layoutBehavior][data.fontSize] * 2;
  //     scopeSecondaryLabelComponent.fontSizes.maxNrChars = baseFontSizes.font.baseFontSizeMedium * fixedLabelScale;
  //   }
  // }

  // if (secondaryValues.length > numSecMeasures) {
  //   // remove secondary values
  //   secondaryLayouts.splice(numSecMeasures, secondaryValues.length - numSecMeasures);
  //   secondaryValues.splice(numSecMeasures, secondaryValues.length - numSecMeasures);
  // }

  // self.props.measureTitle = data.qHyperCube.qMeasureInfo[0].qFallbackTitle;
  // self.props.showSecondaryValues = secondaryValues.length > 0;

  return true;
}
