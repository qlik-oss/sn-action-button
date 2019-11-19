import ActionButton from './action-button';
import styleFormatter from '../utils/style-formatter';

export default function render(element, props) {
  let button = document.createElement('button');
  button.appendChild(document.createElement('text'));
  button = ActionButton({ element, button, ...props });
  element.firstElementChild ? element.replaceChild(button, element.firstElementChild) : element.appendChild(button);
  styleFormatter.setFontSizeAndFamily({ button, ...props });
}
