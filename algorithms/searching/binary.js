function binarySearch(array, value) {
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        let midpoint = Math.floor((start + end) / 2);
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

export default binarySearch;
