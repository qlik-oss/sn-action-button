import ActionButton from "./action-button";

let button;
export function render(element, props) {
  if (button) {
    teardown(element);
  }
  button = ActionButton(props);
  element.append(button);
}

export function teardown(element) {
  element.removeChild(button);
}
