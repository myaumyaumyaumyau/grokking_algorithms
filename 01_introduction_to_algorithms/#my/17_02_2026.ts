const binarySearch = (nums: number[], item: number): number => {
    let start = 0
    let end = nums.length - 1

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2)
        const guess = nums[mid]

        if (guess === item) {
            return mid
        } else if (guess > item) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }

    return - 1
}

const binarySearchRecursive = (nums: number[], item: number, start = 0, end = nums.length - 1): number => {
    if (start > end) {
        return - 1
    }

    const mid = start + Math.floor((end - start) / 2)
    const guess = nums[mid]

    if (guess === item) {
        return mid
    } else if (guess > item) {
        return binarySearchRecursive(nums, item, start, mid - 1)
    } else {
        return binarySearchRecursive(nums, item, mid + 1, end)
    }
}

export {}