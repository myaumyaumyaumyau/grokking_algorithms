const binarySearch = (arr: number[], item: number): number => {
    let start = 0
    let end = arr.length - 1

    while (start <= end) {
        const middle = start + Math.floor((end - start) / 2)
        const guess = arr[middle]

        if (guess === item) {
            return middle
        } else if (guess > item) {
            end = middle - 1
        } else if (guess < item) {
            start = middle + 1
        }
    }

    return -1
}

const binarySearchRecursive = (arr: number[], item: number, start = 0, end = arr.length - 1): number => {
    if (start > end) {
        return -1
    }

    const middle = start + Math.floor((end - start) / 2)
    const guess = arr[middle]

    if (guess === item) {
        return middle
    } else if (guess > item) {
        return binarySearchRecursive(arr, item, start, middle - 1)
    } else if (guess < item) {
        return binarySearchRecursive(arr, item, middle + 1, end)
    }
}

const sumArrayRecursive = (arr: number[], index = 0): number => {
    if (index === arr.length) {
        return 0
    }

    return arr[index] + sumArrayRecursive(arr, index + 1)
}

type NestedArray = (number | NestedArray)[]

const sumNestedArrayRecursive = (arr: NestedArray): number => {
    let sum = 0

    for (const item of arr) {
        if (Array.isArray(item)) {
            sum += sumNestedArrayRecursive(item)
        } else {
            sum += item
        }

    }

    return sum
}