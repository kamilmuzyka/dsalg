function quickSort(array, left = 0, right = array.length - 1) {
    if (left >= right) {
        return;
    }
    const partition = (array, left, right) => {
        const pivot = array[right];
        let i = left - 1;
        for (let j = left; j <= right - 1; j++) {
            if (array[j] < pivot) {
                i += 1;
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        [array[i + 1], array[right]] = [array[right], array[i + 1]];
        return i + 1;
    };
    const pivot = partition(array, left, right);
    quickSort(array, left, pivot - 1);
    quickSort(array, pivot + 1, right);
    return array;
}

export default quickSort;
