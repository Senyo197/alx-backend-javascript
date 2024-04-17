export default function hasValuesFromArray(array, set) {
  return array.every((value) => set.has(value));
}
