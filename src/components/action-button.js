import actionsList from '../utils/actions';
import styleFormatter from '../utils/style-formatter';

export default function ActionButton({ layout, button, Theme, engineApp, context }) {
  const { style } = layout;
  const formattedStyles = styleFormatter.getStyles(style, Theme);
  button.setAttribute('style', formattedStyles);
  button.textContent = style && style.label;
  button.onclick = () => {
    if (context.permissions.indexOf('interact') !== -1) {
      const { actions } = layout;
      actions.forEach(action => {
        const findAction = actionsList.find(act => act.value === action.actionType);
        findAction && findAction.promise && findAction.promise({ engineApp, bookmarkId: action.bookmark });
      });
    }
  };

  return button;
}
