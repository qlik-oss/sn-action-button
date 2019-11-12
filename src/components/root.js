import ActionButton from './action-button';
import styleFormatter from '../utils/style-formatter';

export function teardown() {}

export function render(element, props) {
  const button = ActionButton({ element, ...props });
  element.appendChild(button);
  styleFormatter.setFontSizeAndFamily({ button, ...props });
}
