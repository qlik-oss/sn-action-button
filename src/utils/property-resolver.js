function getValue(dataContainer, reference, defaultValue) {
  const steps = reference.split('.');
  let i;
  if (dataContainer === undefined) {
    return defaultValue;
  }
  for (i = 0; i < steps.length; ++i) {
    if (typeof dataContainer[steps[i]] === 'undefined') {
      return defaultValue;
    }
    dataContainer = dataContainer[steps[i]];
  }

  return dataContainer;
}

export default {
  getValue,
};
