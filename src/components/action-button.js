import allActions from '../utils/actions';
import navigationActions from '../utils/navigation-actions';
import styleFormatter from '../utils/style-formatter';

export const runActions = async actionList => {
  for (let i = 0; i < actionList.length; i++) {
    // eslint-disable-next-line no-await-in-loop
    await actionList[i]();
  }
};

export default function renderButton({ layout, Theme, app, context, senseNavigation, element }) {
  const button = element.firstElementChild;
  const { style, qStateName } = layout;
  const disabled = layout.useEnabledCondition && layout.enabledCondition === 0;
  const interactPermission = context.permissions.indexOf('interact') !== -1;
  const formattedStyles = styleFormatter.getStyles({ style, disabled, Theme, element, button });
  button.setAttribute('style', formattedStyles);
  if (disabled && interactPermission) {
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
  styleFormatter.createLabelAndIcon({ button, Theme, layout });

  const scale = () => {
    if (!disabled && interactPermission) {
      const { offsetWidth, offsetHeight } = button;
      button.style.transform =
        offsetHeight > offsetWidth
          ? `scale(${0.98}, ${1 - (offsetWidth / offsetHeight) * 0.02})`
          : `scale(${1 - (offsetHeight / offsetWidth) * 0.02}, ${0.98})`;
    }
  };

  const resetScale = () => {
    const { transform } = button.style;
    if (!disabled && interactPermission && transform !== '' && transform !== 'scale(1)') {
      button.style.transform = 'scale(1)';
    }
  };

  button.onmousedown = scale;
  button.onmouseup = resetScale;
  button.onmouseleave = resetScale;
  button.ontouchstart = scale;
  button.ontouchend = resetScale;
  button.ontouchcancel = resetScale;

  return button;
}
