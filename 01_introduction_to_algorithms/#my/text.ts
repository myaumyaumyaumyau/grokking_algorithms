const arr = [1, 8, 56, 3, 5, 9, 0, 4, 43, 11, 18, 43]

const binarySearch = (arr: number[], item: number): number => {
    let start = 0
    let end = arr.length - 1

    while (start <= end) {
        const mid = start + Math.floor(((end - start ) / 2))
        const guess = arr[mid]

        if (guess === item) {
            return mid
        } else if (guess > item) {
            end = mid - 1
        } else if (guess < item) {
            start = mid + 1
        }
    }

    return null
}