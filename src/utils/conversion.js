export function convertAction(action, newProperties) {
  const newAction = {
    actionType: action.actionType,
    bookmark: action.selectedBookmark,
    // Will need to convert field selected by expression
    field: action.selectedField,
    // Need to convert expression for variable
    variable: action.variable,
    value: action.value,
    softLock: action.softLock,
    cId: action.cId,
  };
  switch (action.actionType) {
    case 'clearOther':
      newAction.actionType = 'clearAllButThis';
      break;
    case 'unlockAllAndClearAll':
      newAction.actionType = 'clearAll';
      newAction.softLock = true;
      break;
    case 'selectField':
      newAction.actionType = 'selectMatchingValues';
      break;
    case 'selectAndLockField':
      newProperties.actions.push({ ...newAction, cId: null, actionType: 'selectMatchingValues' });
      newAction.actionType = 'lockField';
      break;
    default:
      break;
  }
  return newProperties.actions.push(newAction);
}

export function convertNavigation(oldType) {
  switch (oldType) {
    case 'gotoSheet':
      return 'goToSheet';
    case 'gotoSheetById':
      return 'goToSheetById';
    case 'gotoStory':
      return 'goToStory';
    case 'switchToEdit':
      return 'none';
    default:
      return oldType;
  }
}

const importProperties = (exportedFmt, initialProperties) => {
  const newPropertyTree = { qChildren: [] };
  const newProperties = {
    actions: [],
    // Adding props to avoid errors from old navigation button. Converting to any other chart will still give these errors
    props: { useEnabledCondition: null, fullWidth: 'auto' },
    qLayoutExclude: { disabled: {} },
    ...initialProperties,
  };

  if (exportedFmt && exportedFmt.properties.visualization === 'qlik-button-for-navigation') {
    Object.keys(exportedFmt.properties).forEach((key) => {
      let props;
      switch (key) {
        case 'props':
          props = exportedFmt.properties[key];
          newProperties.style.label = props.buttonLabel;
          newProperties.style.icon.useIcon = props.buttonShowIcon;
          newProperties.style.icon.iconType = props.buttonIconLui;
          newProperties.style.font.align = props.buttonTextAlign;
          newProperties.useEnabledCondition = props.useEnabledCondition;
          newProperties.enabledCondition = props.enabledCondition;
          props.actionItems &&
            props.actionItems.forEach((actionItem) => {
              convertAction(actionItem, newProperties);
            });
          newProperties.navigation = {
            action: convertNavigation(props.navigationAction),
            // Need to convert sheet from expression
            sheet: props.navigationAction === 'gotoSheetById' ? props.sheetId : props.selectedSheet,
            story: props.selectedStory,
            websiteUrl: props.websiteUrl,
            sameWindow: props.sameWindow,
          };
          break;
        case 'qStateName':
        case 'showTitles':
        case 'title':
        case 'subtitle':
        case 'footnote':
          newProperties[key] = exportedFmt.properties[key];
          break;
        default:
          break;
      }
    });
  }
  newPropertyTree.qProperty = newProperties;
  return newPropertyTree;
};

export default importProperties;
