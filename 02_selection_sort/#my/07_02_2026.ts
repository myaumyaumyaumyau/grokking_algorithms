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
    const newArr = [...arr]

    for (let i = 0; i < newArr.length; i++) {
        const smallest = findSmallest(newArr, i);
        [newArr[i], newArr[smallest]] = [newArr[smallest], newArr[i]]
    }

    return newArr
}

const selectionSortRecursive = (arr: number[], index: number): number[] => {
    const newArr = index === 0 ? [...arr] : arr

    if (index === newArr.length - 1) {
        return newArr
    }

    const smallest = findSmallest(newArr, index);
    [newArr[index], newArr[smallest]] = [newArr[smallest], newArr[index]]
    return selectionSortRecursive(newArr, index + 1)
}

export {}