const arr = [1, 8, 56, 3, 5, 9, 0, 4, 43, 11, 18, 43]

const findSmallest = (arr: number[], index: number): number => {
    let smallestItem = arr[index]
    let smallestIndex = index

    for (let i = index; i < arr.length; i++) {
        if (arr[i] < smallestItem) {
            smallestIndex = i
            smallestItem = arr[i]
        }
    }

    return smallestIndex
}

const selectionSortInPlace = (arr: number[]): number[] => {
    const newArr = [...arr]

    for (let i = 0; i < newArr.length; i++) {
        const smallest = findSmallest(newArr, i);
        [newArr[i], newArr[smallest]] = [newArr[smallest], newArr[i]]
    }

    return newArr
}

console.log(selectionSortInPlace(arr))

export {}