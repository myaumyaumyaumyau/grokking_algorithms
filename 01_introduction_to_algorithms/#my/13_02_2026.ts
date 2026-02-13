const binarySearch = (arr: number[], item: number): number => {
    let L = 0
    let R = arr.length - 1

    while (L <= R) {
        const mid = L + Math.floor((R - L) / 2)
        const guess = arr[mid]

        if (guess === item) {
            return mid
        } else if (guess > item) {
            R = mid - 1
        } else {
            L = mid + 1
        }
    }

    return -1
}

const binarySearchRecursive = (arr: number[], item: number, L = 0, R = arr.length - 1): number => {
    if (L > R) {
        return - 1
    }

    const mid = L + Math.floor((R - L) / 2)
    const guess = arr[mid]

    if (guess === item) {
        return mid
    } else if (guess > item) {
        return binarySearchRecursive(arr, item, L, mid - 1)
    } else {
        return binarySearchRecursive(arr, item, mid + 1, R)
    }
}

export {}