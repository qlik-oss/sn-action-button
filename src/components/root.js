import ActionButton from './action-button';
import styleFormatter from '../utils/style-formatter';

export default function render(element, props) {
  const button = ActionButton({ element, ...props });
  element.appendChild(button);
  styleFormatter.setFontSizeAndFamily({ button, ...props });
}
