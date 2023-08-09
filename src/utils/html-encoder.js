export const encodeForHTML = (input) => {
  /**
   * Encodes input for use in HTML context
   */
  if (input === undefined) {
    return "";
  }
  let encoded = "";
  const encodingDiv = document.createElement("div");
  const textNode = document.createTextNode(input);
  encodingDiv.appendChild(textNode);
  encoded = encodingDiv.innerHTML;
  encodingDiv.removeChild(textNode);
  return encoded;
};
