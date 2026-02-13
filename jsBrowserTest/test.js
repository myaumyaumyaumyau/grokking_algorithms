const bruteForce = (nums) => {
    let maxSum = nums[0]

    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0
        for (let k = i; k < nums.length; k++) {
            currentSum += nums[k]
            maxSum = Math.max(maxSum, currentSum)
        }
    }

    return maxSum
}

const kodanes = (nums) => {
    let maxSum = nums[0]
    let curSum = 0

    for (let num of nums) {
        curSum = Math.max(curSum, 0)
        curSum += num
        maxSum = Math.max(maxSum, curSum)
    }

    return maxSum
}

const maxSubarrayWithIndices = (nums) => {
    let curSum = nums[0]
    let maxSum = nums[0]

    let L = 0
    let maxL = 0
    let maxR = 0

    for (let R = 1; R < nums.length; R++) {
        if (curSum + nums[R] < nums[R]) {
            curSum = nums[R]
            L = R
        } else {
            curSum += nums[R]
        }

        if (curSum > maxSum) {
            maxSum = curSum
            maxL = L
            maxR = R
        }
    }

    return [maxL, maxR]
}

const kodanes2 = (nums) => {
    let maxSum = nums[0]
    let curSum = nums[0]

    for (let num of nums) {
        curSum = Math.max(num, curSum + num)
        maxSum = Math.max(curSum, maxSum)
    }

    return maxSum
}