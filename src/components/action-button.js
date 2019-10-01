export default function ActionButton({ layout, button }) {
  const component = layout.components ? layout.components[0] : null;
  let color = '#ff0000';
  let fontSize = '13px';
  if (component) {
    if (component.fontSize) {
      ({ fontSize } = component);
    }
    if (component.fontColor) {
      color = component.fontColor;
    }
  }
  button.setAttribute('style', `color: ${color}; 'font-size': ${fontSize}`);
  button.textContent = 'Not React';
  button.onclick = () => {
    // perform action stack
  };

  return button;
}
