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
  const isSense = !!senseNavigation;
  const button = element.firstElementChild;
  const { style, qStateName } = layout;
  const disabled = layout.useEnabledCondition && layout.enabledCondition === 0;
  const interactPermission = context.permissions.indexOf('interact') !== -1;
  const formattedStyles = styleFormatter.getStyles({ style, disabled, Theme, element });
  button.setAttribute('style', formattedStyles);
  styleFormatter.createLabelAndIcon({ button, Theme, style, isSense });

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
      if (senseNavigation && !senseNavigation.getCurrentStoryId()) {
        const { navigation } = layout;
        const navigationObject = navigation && navigationActions.find(nav => nav.value === navigation.action);
        if (senseNavigation && navigationObject && typeof navigationObject.navigationCall === 'function') {
          await navigationObject.navigationCall({ app, senseNavigation, ...navigation });
        }
      }
      button.removeAttribute('disabled');
    }
  };

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

  button.onmousedown = event => {
    if (event.button === 0) {
      scale();
    }
  };
  button.onmouseup = resetScale;
  button.onmouseleave = resetScale;
  button.ontouchstart = scale;
  button.ontouchend = resetScale;
  button.ontouchcancel = resetScale;

  return button;
}
