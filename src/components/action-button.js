import styleFormatter from '../utils/style-formatter';

export default function ActionButton({ layout, button, Theme }) {
  const { style } = layout;
  const formattedStyles = styleFormatter.getStyles(style, Theme);
  button.setAttribute('style', formattedStyles);
  button.textContent = style && style.label;
  button.onclick = () => {
    // perform action stack
  };

  return button;
}
