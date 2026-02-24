const isPalindrome = (arr: number[]): boolean => {
    let L = 0

    for (let R = arr.length - 1; R > L; R--) {
        if (arr[L] !== arr[R]) {
            return false
        }

        L++
    }

    return true
}

const targetSumBruteForce = (arr: number[], target: number): number[] => {
    for (let L = 0; L < arr.length; L++) {
        for (let R = L + 1; R < arr.length; R++) {
            if (arr[L] + arr[R] === target) {
                return [L, R]
            }
        }
    }
}

const targetSum = (arr: number[], target: number): number[] => {
    let L = 0
    let R = arr.length - 1

    while (L < R) {
        if (arr[L] + arr[R] < target) {
            L++
        } else if (arr[L] + arr[R] > target) {
            R--
        } else {
            return [L, R]
        }
    }
}

const kadaneWithPointers = (arr: number[]): {sum: number, indexes: number[]} => {
    if (arr.length === 0) {
        return {sum: 0, indexes: []}
    }

    let L = 0
    let maxL = 0
    let maxR = 0
    let maxSum = arr[0]
    let currentSum = arr[0]

    for (let R = 1; R < arr.length; R++) {
        if (arr[R] + currentSum < arr[R]) {
            L = R
            currentSum = arr[R]
        } else {
            currentSum += arr[R]
        }

        if (currentSum > maxSum) {
            maxSum = currentSum
            maxL = L
            maxR = R
        }
    }

    return {sum: maxSum, indexes: [maxL, maxR]}
}

const kadaneWithSubarrayItself = (arr: number[]): number[] => {
    if (arr.length === 0) {
        return []
    }

    let L = 0
    let maxL = 0
    let maxR = 0
    let maxSum = arr[0]
    let curSum = arr[0]

    for (let R = 1; R < arr.length; R++) {
        if (curSum < 0) {
            L = R
            curSum = arr[R]
        } else {
            curSum += arr[R]
        }

        if (curSum > maxSum) {
            maxSum = curSum
            maxL = L
            maxR = R
        }
    }

    return arr.slice(maxL, maxR + 1)
}

class prefixSum {
    private prefix: number[]

    constructor(arr: number[]) {
        this.prefix = new Array(arr.length + 1).fill(0)
        for (let i = 0; i < arr.length; i++) {
            this.prefix[i + 1] = this.prefix[i] + arr[i]
        }
    }

    rangeSum(left: number, right: number): number {
        return this.prefix[right + 1] - this.prefix[left]
    }
}

export {}