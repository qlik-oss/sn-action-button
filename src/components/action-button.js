import allActions from '../utils/actions';
import navigationActions from '../utils/navigation-actions';
import styleFormatter from '../utils/style-formatter';

export const runActions = async actionList => {
  for (let i = 0; i < actionList.length; i++) {
    // eslint-disable-next-line no-await-in-loop
    await actionList[i]();
  }
};

export default function ActionButton({ layout, button, Theme, app, context, senseNavigation, element }) {
  const { style, qStateName } = layout;
  const disabled = layout.useEnabledCondition && layout.enabledCondition === 0;
  const inEditMode = context.permissions.indexOf('interact') === -1;
  const formattedStyles = styleFormatter.getStyles({ style, disabled, Theme, element, button });
  button.setAttribute('style', formattedStyles);
  if (disabled && !inEditMode) {
    button.setAttribute('disabled', true);
  } else {
    button.removeAttribute('disabled');
  }
  button.onclick = async () => {
    const actionCallList = [];
    if (context.permissions.indexOf('interact') !== -1) {
      const { actions } = layout;
      actions.forEach(action => {
        const actionObj = allActions.find(act => act.value === action.actionType);
        actionObj && actionCallList.push(actionObj.getActionCall({ app, qStateName, ...action }));
      });
      button.setAttribute('disabled', true);
      await runActions(actionCallList);
      const { navigation } = layout;
      const navigationObject = navigation && navigationActions.find(nav => nav.value === navigation.action);
      if (senseNavigation && navigationObject && typeof navigationObject.navigationCall === 'function') {
        await navigationObject.navigationCall({ app, senseNavigation, ...navigation });
      }
      button.removeAttribute('disabled');
    }
  };

  button.onmousedown = () => {
    if (!disabled && !inEditMode) {
      button.style.width = '99%';
      button.style.height = '99%';
    }
  };

  button.onmouseup = () => {
    if (!disabled && !inEditMode) {
      button.style.width = '100%';
      button.style.height = '100%';
    }
  };

  return button;
}
