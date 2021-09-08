/**
 * Utility functions for objects module.
 * @module utils/object-functions
 */

/**
 * Returns a filtered list of objects given a filter object.
 * @param {array} array - The list of objects.
 * @param {object} filters - The filters to apply.
 * @returns {array} - The filtered list of objects
 */
export function filter(array, filters) {
    return Object.entries(filters).reduce((arr, [key, value]) => {
        return arr.filter((item) => item[key] === value)
    }, array)
}