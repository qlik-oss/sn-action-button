import allActions from '../utils/actions';
import navigationActions from '../utils/navigation-actions';
import styleFormatter from '../utils/style-formatter';

export const runActions = async actionList => {
  for (let i = 0; i < actionList.length; i++) {
    // eslint-disable-next-line no-await-in-loop
    await actionList[i]();
  }
};

export default function ActionButton({ layout, button, Theme, app, context, senseNavigation }) {
  const { style, qStateName } = layout;
  const formattedStyles = styleFormatter.getStyles(style, Theme);
  button.setAttribute('style', formattedStyles);
  if (style.useEnabledCondition && style.enabledCondition === 0 && context.permissions.indexOf('interact') !== -1) {
    button.setAttribute('disabled', true);
  } else {
    button.removeAttribute('disabled');
  }
  button.textContent = style && style.label;
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

  return button;
}
