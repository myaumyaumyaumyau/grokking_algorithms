const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const binary = (arr: number[], item: number): number | null => {
    let low = 0
    let high = arr.length - 1

    for (; low <= high;) {
        const mid = Math.floor(low + (Math.floor(high - low) / 2))
        const guess = arr[mid]

        if (guess === item) {
            return mid
        } else if (guess > item) {
            high = mid - 1
        } else if (guess < item) {
            low = mid + 1
        }
    }

    return null
}

console.log(binary(arr, 5))

export {}