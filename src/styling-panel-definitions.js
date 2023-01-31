const getStylingPanelDefinition = (bkgOptionsEnabled) => ({
  type: 'items',
  grouped: false,
  translation: 'properties.presentation',
  items: {
    styleEditor: {
      component: 'styling-panel',
      chartTitle: 'Object.ActionButton',
      translation: 'LayerStyleEditor.component.styling',
      subtitle: 'LayerStyleEditor.component.styling',
      ref: 'components',
      useGeneral: true,
      useBackground: bkgOptionsEnabled,
    },
  },
});
export default getStylingPanelDefinition;
