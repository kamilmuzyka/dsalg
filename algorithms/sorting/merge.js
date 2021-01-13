function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }
    const midpoint = Math.floor(array.length / 2);
    const left = array.slice(0, midpoint);
    const right = array.slice(midpoint);
    const merge = (left, right) => {
        const array = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                const target = left.shift();
                array.push(target);
            } else {
                const target = right.shift();
                array.push(target);
            }
        }
        return [...array, ...left, ...right];
    };
    return merge(mergeSort(left), mergeSort(right));
}

export default mergeSort;
