const fibonacci = (n: number): number => {
    let result = 0
    let prevRes = 1
    let prevPrevRes = 0

    for (let i = 2; i <= n; i++) {
        result = prevRes + prevPrevRes
        prevPrevRes = prevRes
        prevRes = result
    }

    return result
}

const fibonacciRecursive = (n: number): number => {
    if (n <= 1) return n

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}