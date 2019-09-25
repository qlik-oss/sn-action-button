export default function ActionButton({ layout }) {
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
  const button = document.createElement('button');
  button.setAttribute('style', `color: ${color}; 'font-size': ${fontSize}`);
  button.appendChild(document.createTextNode('Not React'));
  button.onclick = () => {
    // perform action stack
  };

  return button;
}
