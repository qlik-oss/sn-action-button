import actionsList from '../utils/actions';
import styleFormatter from '../utils/style-formatter';

export const runActions = async actionList => {
  for (let i = 0; i < actionList.length; i++) {
    // eslint-disable-next-line no-await-in-loop
    await actionList[i]();
  }
};

export default function ActionButton({ layout, button, Theme, engineApp, context }) {
  const { style } = layout;
  const formattedStyles = styleFormatter.getStyles(style, Theme);
  button.setAttribute('style', formattedStyles);
  button.textContent = style && style.label;
  button.onclick = () => {
    const actionList = [];
    if (context.permissions.indexOf('interact') !== -1) {
      const { actions } = layout;
      actions.forEach(action => {
        const findAction = actionsList.find(act => act.value === action.actionType);
        findAction && actionList.push(findAction.call({ engineApp, ...action }));
      });
      button.setAttribute('disabled', true);
      runActions(actionList).then(() => {
        button.removeAttribute('disabled');
      });
    }
  };

  return button;
}
