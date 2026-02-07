const binarySearch = (arr: number[], item: number): number => {
    let low = 0
    let high = arr.length - 1

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2)
        const guess = arr[mid]

        if (guess === item) {
            return mid
        } else if (guess > item) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return -1
}

const binarySearchRecursive = (arr: number[], item: number, start = 0, end = arr.length - 1): number => {
    if (start > end) {
        return -1
    }

    const mid = start + Math.floor((end - start) / 2)
    const guess = arr[mid]

    if (guess === item) {
        return mid
    } else if (guess > item) {
        return binarySearchRecursive(arr, item, start, mid - 1)
    } else {
        return binarySearchRecursive(arr, item, mid + 1, end)
    }

}

export {}