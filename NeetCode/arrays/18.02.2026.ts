const kadane = (nums: number[]): number => {
    let maxSum = nums[0]
    let curSum = nums[0]

    for (let i = 1; i < nums.length; i++) {
        curSum = Math.max(nums[i], curSum + nums[i])
        maxSum = Math.max(maxSum, curSum)
    }

    return maxSum
}

export const kadaneWithIndexes = (nums: number[]): {sum: number, indexes: number[]} => {
    let maxSum = nums[0]
    let curSum = nums[0]
    let L = 0
    let LMax = 0
    let RMax = 0

    for (let R = 1; R < nums.length; R++) {
        if (curSum < 0) {
            curSum = nums[R]
            L = R
        } else {
            curSum += nums[R]
        }

        if (curSum > maxSum) {
            maxSum = curSum
            LMax = L
            RMax = R
        }
    }


    return {sum: maxSum, indexes: [LMax, RMax]}
}

// ПРОСТО АХУЕТЬ Я ДВА АЛГОСА ВЫШЕ С ПЕРВОГО РАЗА ИДЕАЛЬНО НАПИСАЛ Я В АХУЕ

export {}