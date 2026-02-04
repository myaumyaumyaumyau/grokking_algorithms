const factorial = (num: number): number => {
    if (num <= 1) return 1
    return num * factorial(num - 1)
}

const countdown = (num: number): void => {
    console.log(num)
    if (num === 0) return
    countdown(num - 1)
}

const sumArray = (arr: number[]): number => {
    if (arr.length === 0) return 0
    return arr.pop() + sumArray(arr)
}

const sumArrayImmutable = (arr: number[], index = 0): number => {
    if (index === arr.length) return 0
    return arr[index] + sumArrayImmutable(arr, index + 1)
}

type NestedArray = (number | NestedArray)[]

const sumNestedArray = (arr: NestedArray): number => {
    let sum = 0

    for (const item of arr) {
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

const sumFilesSize = (node: FileNode): number => {
    let size = node.size

    if (node.children) {
        for (const childNode of node.children) {
            size += sumFilesSize(childNode)
        }
    }

    return size
}

export {}