function maxSum(arr: number[]): number | null {
    if (arr.length === 0) {
        return null;
    }

    if (arr.length === 1) {
        return arr[0];
    }

    const subMax = maxSum(arr.slice(1));

    return arr[0] > subMax ? arr[0] : subMax;
};

console.log(maxSum([1, 2, 4, 3]));