import allActions from '../utils/actions';
import navigationActions from '../utils/navigation-actions';
import styleFormatter from '../utils/style-formatter';

export const runActions = async (actionList) => {
  for (let i = 0; i < actionList.length; i++) {
    // eslint-disable-next-line no-await-in-loop
    await actionList[i]();
  }
};

export const renderButton = ({ layout, theme, app, constraints, senseNavigation, element, flag}) => {
  const isSense = !!senseNavigation;
  const button = element.firstElementChild;
  const { style, qStateName, navigation } = layout;
  const disabled = layout.useEnabledCondition && layout.enabledCondition === 0;
  const isClickable = !disabled && !constraints.active;

  if(flag){
    console.log("RENDER - SP")
    if(!layout.components){
      console.log("RENDER - SE from SP")
      button.setAttribute('style', styleFormatter.getStyles({ style, disabled, theme, element, app}));
      styleFormatter.createLabelAndIcon({ button, theme, style, isSense});
    }else{
      button.setAttribute('style', styleFormatter.getStylesStylingPanel({ style, disabled, theme, element ,app, layout}));
    styleFormatter.createLabelAndIconStylingPanel({ button, theme, style, isSense, layout});
    }
  }else{
    console.log("RENDER - SE")
    button.setAttribute('style', styleFormatter.getStyles({ style, disabled, theme, element, app}));
    styleFormatter.createLabelAndIcon({ button, theme, style, isSense});

  }


  // const formattedStyles = styleFormatter.getStyles({ style, disabled, theme, element, app });
  // button.setAttribute('style', formattedStyles);
  button.setAttribute('tabindex', '-1');
  // styleFormatter.createLabelAndIcon({ button, theme, style, isSense });

  button.onclick = async () => {
    if (isClickable) {
      const actionCallList = [];
      const { actions } = layout;
      actions.forEach((action) => {
        const actionObj = allActions.find((act) => act.value === action.actionType);
        actionObj && actionCallList.push(actionObj.getActionCall({ app, qStateName, ...action, senseNavigation }));
      });
      button.setAttribute('disabled', true);
      await runActions(actionCallList);
      if (senseNavigation && !senseNavigation.getCurrentStoryId()) {
        const navigationObject = navigation && navigationActions.find((nav) => nav.value === navigation.action);
        if (senseNavigation && navigationObject && typeof navigationObject.navigationCall === 'function') {
          await navigationObject.navigationCall({ app, senseNavigation, ...navigation, element });
        }
      }
      button.removeAttribute('disabled');
    }
  };

  const scale = () => {
    if (isClickable) {
      const { offsetWidth, offsetHeight } = button;
      button.style.transform =
        offsetHeight > offsetWidth
          ? `scale(${0.98}, ${1 - (offsetWidth / offsetHeight) * 0.02})`
          : `scale(${1 - (offsetHeight / offsetWidth) * 0.02}, ${0.98})`;
    }
  };

  const resetScale = () => {
    const { transform } = button.style;
    if (isClickable && transform !== '' && transform !== 'scale(1)') {
      button.style.transform = 'scale(1)';
    }
  };

  button.onmousedown = (event) => {
    if (event.button === 0) {
      scale();
    }
  };
  button.onmouseup = resetScale;
  button.onmouseleave = resetScale;
  button.ontouchstart = scale;
  button.ontouchend = resetScale;
  button.ontouchcancel = resetScale;

  return () => {
    button.onclick = undefined;
    button.onmousedown = undefined;
    button.onmouseup = undefined;
    button.onmouseleave = undefined;
    button.ontouchstart = undefined;
    button.ontouchend = undefined;
    button.ontouchcancel = undefined;
  };
};
