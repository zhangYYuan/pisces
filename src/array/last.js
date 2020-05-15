/**
 *
 * @param array
 * @returns Returns the last element of `array`
 * @example
 * last([1, 2, 3])
 * // => 3
 */
function last(array) {
    const length = array == null ? 0 : array.length
    return length ? array[length - 1] : undefined
}

export default last
