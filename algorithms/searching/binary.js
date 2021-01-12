export function binarySearchM1(array, value) {
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        const midpoint = Math.floor((start + end) / 2);
        if (array[midpoint] === value) {
            return midpoint;
        }
        if (array[midpoint] > value) {
            end = midpoint - 1;
        } else {
            start = midpoint + 1;
        }
    }
    return -1;
}

export function binarySearchM2(
    array,
    value,
    start = 0,
    end = array.length - 1
) {
    const midpoint = Math.floor((start + end) / 2);
    if (array[midpoint] === value) {
        return midpoint;
    }
    if (array[midpoint] > value) {
        return binarySearchM2(array, value, start, midpoint);
    } else {
        return binarySearchM2(array, value, midpoint + 1, end);
    }
}
