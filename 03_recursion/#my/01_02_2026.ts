const factorialTailRecursive = (n: number, acc = 1): number => {
    if (n < 0) {
        return NaN
    }

    if (n === 0) {
        return acc
    }

    return factorialTailRecursive(n - 1, n * acc)
}

const sumRecursive = (n: number): number => {
    if (n < 0) return NaN
    if (n === 0) return 0

    return n + sumRecursive(n - 1)
}

const sumTailRecursive = (n: number, acc = 0): number => {
    if (n < 0) return NaN
    if (n === 0) return acc

    return sumTailRecursive(n - 1, acc + n)
}

const sumArrayTailRecursive = (arr: number[], index = 0, acc = 0): number => {
    if (index === arr.length) {
        return acc
    }

    return sumArrayTailRecursive(arr, index + 1, acc + arr[index])
}