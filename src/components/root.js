import ActionButton from './action-button';
import styleFormatter from '../utils/style-formatter';

export default function render(element, props) {
  const button = element.firstElementChild;
  ActionButton({ element, button, ...props });
  styleFormatter.setFontSizeAndFamily({ button, ...props });
}
