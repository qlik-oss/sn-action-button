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
      newAction.actionType = 'selectValues';
      break;
    case 'selectAndLockField':
      newProperties.actions.push({ ...newAction, cId: `${newAction.cId}1`, actionType: 'selectValues' });
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
    default:
      return oldType;
  }
}

const importProperties = (exportedFmt, initialProperties) => {
  const newPropertyTree = { qChildren: [] };
  // Adding props to avoid errors from old navigation button. Converting to any other chart will still give these errors
  const newProperties = {
    actions: [],
    props: { useEnabledCondition: null, fullWidth: 'auto' },
    ...initialProperties,
  };
  if (!newProperties.qLayoutExclude) {
    newProperties.qLayoutExclude = {};
  }
  newProperties.qLayoutExclude.disabled = {};
  if (exportedFmt && exportedFmt.properties.visualization === 'qlik-button-for-navigation') {
    Object.keys(exportedFmt.properties).forEach(key => {
      let props;
      switch (key) {
        case 'qLayoutExclude':
          break;
        case 'props':
          props = exportedFmt.properties[key];
          newProperties.style = {
            label: props.buttonLabel,
            showIcon: props.buttonShowIcon,
            icon: props.buttonIconLui,
            textAlign: props.buttonTextAlign,
          };
          newProperties.useEnabledCondition = props.useEnabledCondition;
          newProperties.enabledCondition = props.enabledCondition;
          props.actionItems.forEach(actionItem => {
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
          newProperties[key] = exportedFmt.properties[key];
          break;
        default:
          newProperties.qLayoutExclude.disabled[key] = exportedFmt.properties[key];
          break;
      }
    });
  }
  newPropertyTree.qProperty = newProperties;
  return newPropertyTree;
};

export default importProperties;
