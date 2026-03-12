const prefix = (nums: number[]): number[] => {
    const prefix = new Array(nums.length + 1).fill(0)

    for (let i = 0; i < nums.length; i++) {
        prefix[i + 1] = prefix[i] + nums[i]
    }

    return prefix
}

const rangeSum = (prefix: number[], L: number, R: number): number => {
    return prefix[R + 1] - prefix[L]
}

export {}