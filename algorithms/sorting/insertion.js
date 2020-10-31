function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let item = array[i];
        let hole = i;
        while (hole > 0 && array[hole - 1] > item) {
            array[hole] = array[hole - 1];
            hole--;
        }
        array[hole] = item;
    }
}

export default insertionSort;