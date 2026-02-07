const factorial = (num: number): number => {
    if (num <= 1) return 1
    return num * factorial(num - 1)
}

const binarySearchRecursive = (arr: number[], item: number, start = 0, end = arr.length - 1): number => {
    if (start > end) {
        return -1
    }

    let mid = start + Math.floor((end - start) / 2)
    let guess = arr[mid]

    if (guess === item) {
        return mid
    } else if (guess > item) {
        return binarySearchRecursive(arr, item, start, mid - 1)
    } else if (guess < item) {
        return binarySearchRecursive(arr, item, mid + 1, end)
    }
}

const sumArrayRecursive = (arr: number[], index: number): number => {
    if (index === arr.length) {
        return 0
    }

    return arr[index] + sumArrayRecursive(arr, index + 1)
}

const sumItemsInList = (obj: {}): number => {
    let sum = 0

    for (const item in obj) {
        if (Object.getPrototypeOf(obj[item]) === Object.prototype) {
            sum += sumItemsInList(obj[item])
        }
        sum++
    }

    return sum
}

const findMaxNumberRecursive = (arr: number[], index = 0): number => {
    let max = arr[index]
    if (arr.length - 1 === index) return max

    let maxInRest = findMaxNumberRecursive(arr, index + 1)
    if (maxInRest > max) {
        max = maxInRest
    }

    return max
}

export {}