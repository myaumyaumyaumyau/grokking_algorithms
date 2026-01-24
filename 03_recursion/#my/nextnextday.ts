const binarySearchRecursive = (arr: number[], item: number, start = 0, end = arr.length - 1): number => {
    if (start > end) {
        return - 1
    }

    const mid = start + Math.floor((end - start) / 2)
    const guess = arr[mid]

    if (guess === item) {
        return mid
    } else if (guess > item) {
        return binarySearchRecursive(arr, item, start, mid - 1)
    } else if (guess < item) {
        return binarySearchRecursive(arr, item, mid + 1, end)
    }
}