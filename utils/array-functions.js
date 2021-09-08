/**
 * Utility functions for arrays module.
 * @module utils/array-functions
 */

/**
 * Returns true if predicate return true for <u>any</u> item.
 * Otherwise returns false.
 * @param { function } predicate - The function that returns true or false.
 * @param { array } array - List of items to test.
 * @returns { boolean }
 */
export function some(predicate, array) {
  return array.reduce((acc, value) => acc || predicate(value), false)
}

/**
 * Returns true if predicate return true for <u>all</u> items.
 * Otherwise returns false.
 * @param { function } predicate - The function that returns true or false.
 * @param { array } array - List of items to test.
 * @returns  { boolean }
 */
export function all(predicate, array) {
  return array.reduce((acc, value) => acc && predicate(value), true)
}
