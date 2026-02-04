const binarySearch = (arr: number[], item: number): number => {
    let start = 0
    let end = arr.length - 1

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2)
        const guess = arr[mid]

        if (guess === item) {
            return mid
        } else if (guess > item) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }

    return -1
}


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