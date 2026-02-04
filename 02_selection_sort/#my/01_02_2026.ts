const findSmallest = (arr: number[], index: number): number => {
    let smallest = index

    for (let i = index + 1; i < arr.length; i++) {
        if (arr[i] < arr[smallest]) {
            smallest = i
        }
    }

    return smallest
}

const selectionSort = (arr: number[]): number[] => {
    const sortedArr = [...arr]

    for (let i = 0; i < sortedArr.length; i++) {
        const smallest = findSmallest(sortedArr, i);
        [sortedArr[i], sortedArr[smallest]] = [sortedArr[smallest], sortedArr[i]]
    }

    return sortedArr
}

const selectionSortRecursive = (arr: number[], index = 0 ): number[] => {
    const sortedArr = index === 0 ? [...arr] : arr

    if (index >= arr.length) {
        return sortedArr
    }

    const smallest = findSmallest(sortedArr, index);
    [sortedArr[index], sortedArr[smallest]] = [sortedArr[smallest], sortedArr[index]]

    return selectionSortRecursive(sortedArr, index + 1)
}