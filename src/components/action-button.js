import themeResolver from '../utils/theme-resolver';
import actionsList from '../utils/actions';

let palette;
const setStyle = (styleString, path, setting) => {
  styleString += `${path}: ${setting};`;
  return styleString;
};

const setStyleColor = (styleString, path, inputColor, defaultColor) => {
  const color = themeResolver.resolveColor(inputColor, palette);
  styleString += `${path}: ${color === 'null' ? defaultColor : color};`;
  return styleString;
};

const runActions = async actionList => {
  for (let i = 0; i < actionList.length; i++) {
    // eslint-disable-next-line no-await-in-loop
    await actionList[i]();
  }
};

export default function ActionButton({ layout, button, Theme, engineApp, context }) {
  const { style } = layout;
  palette = Theme.getCurrent().properties.palettes.ui[0].colors;
  let styles = 'width: 100%; height: 100%;';
  if (style) {
    styles = setStyleColor(styles, 'color', style.fontColor || null, '#ffffff');
    styles = setStyle(styles, 'font-size', style.fontSize ? `${style.fontSize}px` : '12px');
    styles = setStyleColor(styles, 'background-color', style.backgroundColor || null, '#3F8AB3');
  } else {
    styles += 'color: #ffffff; font-size: 12px; background-color: #3F8AB3';
  }
  button.setAttribute('style', styles);
  button.textContent = (style && style.label) || 'My Button';
  button.onclick = () => {
    const actionList = [];
    if (context.permissions.indexOf('interact') !== -1) {
      const { actions } = layout;
      actions.forEach(action => {
        const findAction = actionsList.find(act => act.value === action.actionType);
        actionList.push(findAction.promise({ engineApp, ...action }));
      });
      button.setAttribute('disabled', true);
      runActions(actionList).then(() => {
        button.removeAttribute('disabled');
      });
    }
  };

  return button;
}
