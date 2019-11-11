import ActionButton from './action-button';

export function teardown() {}

export function render(element, props) {
  const button = ActionButton({ element, ...props });
  element.appendChild(button);
  element.setAttribute(
    'style',
    'height: 100%; position: relative; display: flex; justify-content: center; align-items: center;'
  );
}
