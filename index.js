
/**
 * Returns true if the given var is a JSON object
 * @param {(object|any)} obj
 * @returns {boolean}
 */
export const isObject = function(obj) {
    return obj instanceof Object && obj.constructor === Object
}

/**
 * Returns true if the given object is empty
 * @param {object} obj
 * @returns {boolean}
 */
export const isEmpty = function(obj) {
    return !!Object.keys(obj).length
}

