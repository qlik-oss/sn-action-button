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

export function getBoundingBox(self, $element) {
  const isSnapshotLockedMode = self.layout && self.layout.snapshotData && !self.options.freeResize;

  if (isSnapshotLockedMode && self.layout.snapshotData.elementRatio) {
    // KPI Snapshot object not in free resize mode
    return {
      // This "forces" away the responsive behavior
      width: self.layout.snapshotData.object.size.w,
      height: self.layout.snapshotData.object.size.w * self.layout.snapshotData.elementRatio,
    };
  }

  const size = $element.getBoundingClientRect();
  return {
    width: size.width,
    height: size.height,
  };
}
