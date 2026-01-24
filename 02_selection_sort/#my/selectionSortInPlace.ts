const arr = [1, 4, 56, 4, 5, 9, 0, 4, 43, 11, 18, 43]

const findSmallest = (arr: number[], startIndex: number): number => {
    let smallest = arr[startIndex]
    let smallestIndex = startIndex

    for (let i = startIndex; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
            smallestIndex = i
        }
    }

    return smallestIndex
}

const selectionSortInPlace = (arr: number[]): number[] => {
    const newArr = [...arr]

    for (let i = 0; i < arr.length; i++) {
        const temp = newArr[i]
        const smallest = findSmallest(newArr, i)

        newArr[i] = newArr[smallest]
        newArr[smallest] = temp
    }

    return newArr
}

console.log(selectionSortInPlace(arr))