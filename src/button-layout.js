const ElementScaleMode = {
  NONE: 0,
  ADJUSTTOTEXT: 1,
};

const TextScaleMode = {
  NONE: 0,
  SCALE: 1,
  MAX: 2,
};

const Direction = {
  ROW: 'row',
  COLUMN: 'column',
};

const sizeComponent = (componentLayoutInfo, textScaleMode, elementScaleMode, Theme) => {
  // allocate space
  const w = componentLayoutInfo.boundingBox.width;
  const h = componentLayoutInfo.boundingBox.height;

  // recursive
  if (componentLayoutInfo.components) {
    componentLayoutInfo.components.forEach((component) => {
      sizeComponent(component, componentLayoutInfo, w, h, textScaleMode, elementScaleMode, Theme);
    });
  }

  let scaledTextInfo;
  // scale text
  if (typeof componentLayoutInfo.getText === 'function') {
    if (textScaleMode === TextScaleMode.MAX) {
      scaledTextInfo = maxText(componentLayoutInfo.getText(), w, h, null, null, Theme);
    } else if (textScaleMode === TextScaleMode.SCALE) {
      scaledTextInfo = scaleText(componentLayoutInfo, w, h, Theme);
    } else {
      scaledTextInfo = fixedText(componentLayoutInfo.fontSizes.maxNrChars);
    }
    if (elementScaleMode === ElementScaleMode.ADJUSTTOTEXT) {
      componentLayoutInfo.boundingBox = {
        height: scaledTextInfo.height,
        width: scaledTextInfo.width,
      };
    }
    if (!componentLayoutInfo.fontSizes) {
      componentLayoutInfo.fontSizes = {};
    }
    componentLayoutInfo.fontSizes.fontSize = `${scaledTextInfo.fontSize * 10}%`;
    componentLayoutInfo.fontSizes.scaledFontSize = scaledTextInfo.fontSize;
  }
};

function checkLayout(layoutInfo) {
  if (!layoutInfo.components || layoutInfo.components.length === 0) {
    return layoutInfo;
  }

  let size;
  let sizeValue;
  let accumulatedSize = 0;
  const parentHeight = layoutInfo.boundingBox.height;
  const parentWidth = layoutInfo.boundingBox.width;
  let i;
  let component;
  const parentDirection = layoutInfo.direction;
  const direction = getDirection(layoutInfo, parentHeight, parentWidth);
  let componentBoundingBox;

  // remove components that does not fit
  layoutInfo.components.forEach((c) => {
    c.direction = c.direction ? c.direction : direction;
    size = c.size.min ? c.size.min : c.size ? c.size : 0;
    if (
      (typeof c.isVisible === 'function' && !c.isVisible()) ||
      size * parentHeight < (c.size.treshold && c.size.treshold.height ? c.size.treshold.height : 10) ||
      parentWidth < (c.size.treshold && c.size.treshold.width ? c.size.treshold.width : 10)
    ) {
      c.show = false;
    } else {
      accumulatedSize += size;
      c.show = true;
    }
  });

  // and adjust size if sum is not 1.0
  for (i = layoutInfo.components.length - 1; i >= 0; i--) {
    component = layoutInfo.components[i];
    if (accumulatedSize < 1) {
      if (component.size.stretch) {
        component.size.value = component.size.min + (1 - accumulatedSize);
      }
    } else if (typeof component.size === 'number') {
      // do nothing ?
    } else {
      component.size.value = null;
    }
  }

  layoutInfo.components.forEach((c) => {
    sizeValue = c.size.value ? c.size.value : c.size.min ? c.size.min : c.size;
    componentBoundingBox = {};
    if (parentDirection === Direction.ROW) {
      componentBoundingBox.height = parentHeight;
      componentBoundingBox.width = parentWidth * sizeValue;
    } else {
      componentBoundingBox.width = parentWidth;
      componentBoundingBox.height = parentHeight * sizeValue;
    }
    c.boundingBox = componentBoundingBox;
  });

  // recursive
  layoutInfo.components.forEach((c) => {
    checkLayout(c);
  });

  return layoutInfo;
}

const BTNLayout = {
  TextScaleMode,
  sizeComponent,
  Direction,
  checkLayout,
};
export default BTNLayout;
