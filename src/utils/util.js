export default function evaluateCondition(condition) {
  // case condition is commented
  if (condition && condition.length >= 2 && condition[0] === '/' && condition[1] === '/') {
    return true;
  }
  // convert to numeric with -1 (true) as the default
  const condVal = condition ? +condition : -1;
  // handle the string 'true' as true and all other strings as false
  if (Number.isNaN(+condVal)) {
    return condition.toLowerCase() === 'true';
  }
  return condVal !== 0;
}
