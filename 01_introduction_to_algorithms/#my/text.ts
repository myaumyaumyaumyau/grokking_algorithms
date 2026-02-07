const arr = [1, 8, 56, 3, 5, 9, 0, 4, 43, 11, 18, 43]

const binarySearch = (arr: number[], item: number, low = 0, high = arr.length - 1): number => {
    if (low > high) {
        return -1
    }

    const mid = low + Math.floor((high - low) / 2)
    const guess = arr[mid]

    if (guess === item) {
        return mid
    } else if (guess > item) {
        return binarySearch(arr, item, low, mid - 1)
    } else if (guess < item) {
        return binarySearch(arr, item, mid + 1, high)
    }
}

export {}