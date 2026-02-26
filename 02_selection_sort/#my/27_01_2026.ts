const findSmallest = (arr: number[], index = 0): number => {
    let smallestIndex = index
    let smallestElem = arr[smallestIndex]

    for (let i = smallestIndex + 1; i < arr.length; i++) {
        if (arr[i] < smallestElem) {
            smallestIndex = i
            smallestElem = arr[i]
        }
    }

    return smallestIndex
}

const selectionSort = (arr: number[]): number[] => {
    const newArr = [...arr]

    for (let i = 0; i < arr.length; i++) {
        const smallest = findSmallest(newArr, i);
        [newArr[i], newArr[smallest]] = [newArr[smallest], newArr[i]]
    }

    return newArr
}

export {}
