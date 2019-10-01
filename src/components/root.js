import ActionButton from './action-button';

export function teardown() {}

export function render(element, props) {
  const button = ActionButton(props);
  element.append(button);
}
