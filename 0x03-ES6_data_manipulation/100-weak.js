export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Get the count of queries for the current endpoint from the WeakMap
  let count = weakMap.get(endpoint) || 0;

  // Increment the count for the current endpoint
  count += 1;

  // Update the count in the WeakMap
  weakMap.set(endpoint, count);

  // Check if the number of queries is >= 5
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
