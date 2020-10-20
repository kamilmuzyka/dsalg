function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        let sorted = true;
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                sorted = false;
            }
        }
        if (sorted) break;
    }
}

module.exports = bubbleSort;

