const findSmallestIndex = (arr: number[], index = 0): number => {
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
        const smallest = findSmallestIndex(newArr, i);
        [newArr[i], newArr[smallest]] = [newArr[smallest], newArr[i]]
    }

    return newArr
}

const selectedSortRecursive = (arr: number[], index = 0): number[] => {
    const newArr = index === 0 ? [...arr] : arr

    if (index === arr.length - 1) {
        return newArr
    }

    const smallest = findSmallestIndex(newArr, index);
    [newArr[smallest], newArr[index]] = [newArr[index], newArr[smallest]]
    return selectedSortRecursive(newArr, index + 1)
}

export {}