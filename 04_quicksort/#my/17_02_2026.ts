const quicksort = (nums: number[]): number[] => {
    if (nums.length < 2) {
        return nums
    }

    const pivotIndex = Math.floor(Math.random() * nums.length)
    const pivot = nums[pivotIndex]

    const less = []
    const greater = []
    const equal = []

    for (let num of nums) {
        if (num > pivot) {
            greater.push(num)
        } else if (num < pivot) {
            less.push(num)
        } else {
            equal.push(num)
        }
    }

    return [...quicksort(less), ...equal, ...quicksort(greater)]
}

export {}