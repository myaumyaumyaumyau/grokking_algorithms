const factorial = (n: number): number => {
    if (n < 0) {
        return NaN
    }
    if (n === 0) {
        return 1
    }

    return n * factorial(n - 1)
}

const factorialTail = (n: number, acc = 1): number => {
    if (n < 0) {
        return NaN
    }
    if (n === 0) {
        return acc
    }

    return factorialTail(n - 1, acc * n)
}

const sumArray = (arr: number[], index = 0): number => {
    if (arr.length === index) {
        return 0
    }
    return arr[index] + sumArray(arr, index + 1)
}

const sumArrayTail = (arr: number[], index = 0, acc = 0): number => {
    if (arr.length < 1) {
        return NaN
    }
    if (arr.length === index) {
        return acc
    }

    return sumArrayTail(arr, index + 1, acc + arr[index])
}

type NestedArray1 = (number | NestedArray)[]
const sumNestedArray = (arr: NestedArray1): number => {
    let sum = 0

    for (let item of arr) {
        if (Array.isArray(item)) {
            sum += sumNestedArray(item)
        } else {
            sum += item
        }
    }

    return sum
}

type FileNode = {
    name: string;
    size: number;
    children?: FileNode[];
}
const sumFileNodes = (node: FileNode): number => {
    let sum = node.size

    if (node.children) {
        for (let child of node.children) {
            sum += sumFileNodes(child)
        }
    }

    return sum
}