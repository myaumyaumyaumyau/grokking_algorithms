const kadane = (nums: number[]): number => {
    if (nums.length === 0) return 0

    let maxSum = nums[0]
    let curSum = nums[0]

    for (let i = 1; i < nums.length; i++) {
        curSum = Math.max(nums[i], curSum + nums[i])
        maxSum = Math.max(maxSum, curSum)
    }

    return maxSum
}

// closeDuplicates using bruteForce with O(n * k) speed.
const bruteForce = (nums: number[], k = 2): boolean => {
    for (let L = 0; L < nums.length; L++) {
        for (let R = L + 1; R < Math.min(nums.length, L + k + 1); R++) {
            if (nums[L] === nums[R]) {
                return true
            }
        }
    }

    return false
}

// closeDuplicates with O(n) speed
const closeDuplicates = (nums: number[], k: number): boolean => {
    const window = new Set<number>()
    let L = 0

    for (let R = 0; R < nums.length; R++) {
        if (R - L + 1 > k) {
            window.delete(nums[L])
            L++
        }

        if (window.has(nums[R])) {
            return true
        }

        window.add(nums[R])
    }

    return false
}

// Find the length of the longest subarray, with the same value in each position. O(n)
const longestSubarraySlidingWindow = (nums: number[]): number => {
    let length = 0
    let L = 0

    for (let R = 0; R < nums.length; R++) {
        if (nums[L] !== nums[R]) {
            L = R
        }
        length = Math.max(length, R - L + 1)
    }

    return length
}

const longestSubarrayWOSlidingWindow = (nums: number[]): number => {
    if (nums.length === 0) return 0

    let maxlength = 1
    let curMaxLength = 1

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            curMaxLength++
        } else {
            curMaxLength = 1
        }
        maxlength = Math.max(maxlength, curMaxLength)
    }

    return maxlength
}

// Find the minimum length subarray, where the sum is greater than or equal to the target. Assume all values are positive
const shortestSubarray = (nums: number[], target: number): number => {
    let L = 0
    let total = 0 // also can be named as curSum
    let length = Infinity

    for (let R = 0; R < nums.length; R++) {
        total += nums[R]

        while (total >= target) {
            length = Math.min(R - L + 1, length)
            total -= nums[L]
            L++
        }
    }

    return length === Infinity ? 0 : length
}

// Check if an array is a palindrome
const palindrome = (nums: number[]): boolean => {
    let L = 0
    let R = nums.length - 1

    while (L < R) {
        if (nums[L] !== nums[R]) {
            return false
        }
        L++
        R--
    }

    return true
}

// Given a sorted input array, return the two indices of two elements which sum up to the target value.
// Assume there's exactly one solution.
// O(n)
const targetSum = (nums: number[], target: number): number[] => {
    let L = 0
    let R = nums.length - 1

    while (L < R) {
        if (nums[L] + nums[R] > target) {
            R--
        } else if (nums[L] + nums[R] < target) {
            L++
        } else {
            return [L, R]
        }
    }

    return []
}

// Given an array of values, design a data structure that can query the sum of a subarray of the values
class PrefixSum {
    private prefix: number[]

    constructor(nums: number[]) {
        this.prefix = new Array(nums.length + 1).fill(0)

        for (let i = 0; i < nums.length; i++) {
            this.prefix[i + 1] = this.prefix[i] + nums[i]
        }
    }

    rangeSum(left: number, right: number): number {
        return this.prefix[right + 1] - this.prefix[left]
    }
}