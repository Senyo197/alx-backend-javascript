export default function cleanSet(set, startString) {
  let result = '';
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      result += value.substring(startString.length) + '-';
    }
  });
  // Remove the trailing '-' if there are values in the result
  if (result.length > 0) {
    result = result.slice(0, -1);
  }
  return result;
}
