function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let smallest = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[smallest]) {
                smallest = j;
            }
        }
        if (smallest !== i) {
            [array[smallest], array[i]] = [array[i], array[smallest]];
        }
    }
}

export default selectionSort;
