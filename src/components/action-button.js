import allActions from '../utils/actions';
import styleFormatter from '../utils/style-formatter';

export const runActions = async actionList => {
  for (let i = 0; i < actionList.length; i++) {
    // eslint-disable-next-line no-await-in-loop
    await actionList[i]();
  }
};

export default function ActionButton({ layout, button, Theme, app, context }) {
  const { style } = layout;
  const formattedStyles = styleFormatter.getStyles(style, Theme);
  button.setAttribute('style', formattedStyles);
  button.textContent = style && style.label;
  button.onclick = () => {
    const actionCallList = [];
    if (context.permissions.indexOf('interact') !== -1) {
      const { actions } = layout;
      actions.forEach(action => {
        const actionObj = allActions.find(act => act.value === action.actionType);
        actionObj && actionCallList.push(actionObj.getActionCall({ app, ...action }));
      });
      button.setAttribute('disabled', true);
      runActions(actionCallList).then(() => {
        button.removeAttribute('disabled');
      });
    }
  };

  return button;
}
