class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(
        val: number,
        left: TreeNode | null = null,
        right: TreeNode | null = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

const findMinValue = (root: TreeNode): number => {
    let curr = root

    while (curr !== null && curr.left !== null) {
        curr = curr.left
    }

    return curr.val
}

const BSTRemove = (root: TreeNode | null, val: number): TreeNode | null => {
    if (!root) {
        return null
    }

    if (val > root.val) {
        root.right = BSTRemove(root.right, val)
    } else if (val < root.val) {
        root.left = BSTRemove(root.left, val)
    } else {
        if (root.left === null) {
            return root.right
        } else if (root.right === null) {
            return root.left
        } else {
            const minValue = findMinValue(root.right)
            root.val = minValue
            root.right = BSTRemove(root.right, minValue)
        }
    }

    return root
}

const BFS = (root: TreeNode | null): number[] => {
    if (!root) return []

    const queue = [root]
    const res: number[] = []

    for (let i = 0; i < queue.length; i++) {
        res.push(queue[i].val)
        if (queue[i].left) {
            queue.push(queue[i].left)
        }
        if (queue[i].right) {
            queue.push(queue[i].right)
        }
    }

    return res
}

const BFSLevel = (root: TreeNode | null): void => {
    const queue: TreeNode[] = []
    if (root !== null) queue.push(root)
    let level = 0

    while (queue.length > 0) {
        console.log(`level ${level}: `)
        const levelLength = queue.length

        for (let i = 0; i < levelLength; i++) {
            const curr = queue.shift()
            console.log(curr.val)
            if (curr.left !== null) {
                queue.push(curr.left)
            }
            if (curr.right !== null) {
                queue.push(curr.right)
            }
        }

        level++
        console.log()
    }
}

class ListNode {
    val: number
    right: ListNode | null

    constructor(val: number, right: ListNode | null = null) {
        this.val = val
        this.right = right
    }
}

const KanadeIndexes = (nums: number[]): number[] => {
    let maxL = 0
    let maxR = 0
    let L = 0
    let curSum = 0
    let maxSum = nums[0]

    for (let R = 0; R < nums.length; R++) {
        if (curSum < nums[R]) {
            L = R
            curSum = 0
        }
        curSum += nums[R]

        if (curSum > maxSum) {
            maxSum = curSum
            maxL = L
            maxR = R
        }
    }

    return [maxL, maxR]
}

// Find the length of longest subarray with the same
// value in each position: O(n)
const sameValueInEachPosition = (arr: number[]): number => {
    let res = 0
    let L = 0

    for (let R = 0; R < arr.length; R++) {
        if (arr[L] !== arr[R]) {
            L = R
        }
        res = Math.max(res, R - L + 1)
    }

    return res
}

// Find the length of longest subarray with the same
// value in each position: O(n)
const sameValueInEachPositionSimple = (arr: number[]): number => {
    let res = 0
    let cur = 1

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            cur = 1
        } else {
            cur += 1
        }

        res = Math.max(res, cur)
    }

    return res
}

// Find length of minimum size subarray where the sum is
// greater than or equal to the target: O(n)
const shortestSubarray = (arr: number[], target: number): number => {
    let L = 0
    let total = 0
    let length = Infinity

    for (let R = 0; R < arr.length; R++) {
        total += arr[R]

        while (total >= target) {
            length = Math.min(length, R - L + 1)
            total -= arr[L]
            L++
        }
    }

    return length === Infinity ? 0 : length
}

const prefixSum = (arr: number[]): number[] => {
    const prefixSum = new Array(arr.length + 1).fill(0)
    for (let i = 0; i < arr.length; i++) {
        prefixSum[i + 1] = prefixSum[i] + arr[i]
    }
    return prefixSum
}

const suffixSum = (arr: number[]): number[] => {
    let suffixSum = new Array(arr.length + 1).fill(0)
    for (let i = arr.length - 1; i >= 0; i--) {
        suffixSum[i] = suffixSum[i + 1] + arr[i]
    }
    return suffixSum
}

const tribonacci = (num: number): number => {
    if (num <= 0) {
        return 0
    }
    if (num === 1 || num === 2) {
        return 1
    }

    return tribonacci(num - 1) + tribonacci(num - 2) + tribonacci(num - 3)
}

/**
 * Есть дерево, которое лежит в переменной tree. Нужно написать функцию,
 * которая будет пробегать по этому дереву и возвращать массив всех собранных value из этого дерева.
 **/
type TreeNode1 = { value: number; children?: TreeNode1[] };
const tree: TreeNode1 = {
    value: 1,
    children: [
        {
            value: 2,
            children: [{value: 3}],
        },
        {
            value: 4,
            children: [{value: 5}, {value: 6}],
        },
    ],
}

const treeTotalValue = (node: TreeNode1): number => {
    let value = node.value

    if (node.children?.length) {
        for (const child of node.children) {
            value += treeTotalValue(child)
        }
    }

    return value
}

const treeValuesArray = (node: TreeNode1): number[] => {
    let values = [node.value]

    if (node.children?.length) {
        for (const child of node.children) {
            values.concat(treeValuesArray(child))
        }
    }

    return values
}

/** 5. Написать написать функцию, заменяющую значения первого массива
 * на значения из второго массива с указанной позиции, сохраняя длину первого.
 */
// Example: pasteArray([1, 2, 3, 4, 5], [9, 8, 7], 3) => [1, 2, 3, 9, 8]
const pasteArray = (arr1: number[], arr2: number[], pos: number): number[] => {
    const res = [...arr1]
    let k = 0

    for (let i = pos; i < arr1.length; i++) {
        if (k >= arr2.length) {
            break
        }

        res[i] = arr2[k]
        k++
    }

    return res
}

const getNumberCharacters = (str: string): string => {
    const map = new Map()
    let res = ''

    for (const char of str) {
        map.set(char, (map.get(char) ?? 0) + 1)
    }

    for (const [char, frequency] of map) {
        res += frequency + char
    }

    return res
}

// Вернуть массив id всех нод у которых красный цвет
type TreeNodeWithColor = {
    id: string
    color: 'red' | 'blue'
    children: TreeNodeWithColor[]
}

const getRedIds = (node: TreeNodeWithColor): string[] => {
    const res: string[] = []
    if (node.color === 'red') {
        res.push(node.id)
    }

    for (const child of node.children) {
        res.push(...getRedIds(child))
    }

    return res
}

// нужно вернуть самого младшего, самого старшего, и разницу в возрасте
const getAge = (arr: {name: string, age: number}[]): number[] => {
    const res: number[] = []

    for (const person of arr) {
        res.push(person.age)
    }
    res.sort((a,b) => a - b)

    const youngest = res[0]
    const oldest = res[res.length - 1]
    const diff = oldest - youngest

    return [youngest, oldest, diff]
}

const obj = [
    {
        name: "Tom",
        age: 13,
    },
    {
        name: "Tim",
        age: 56,
    },
    {
        name: "Bob",
        age: 45,
    },
    {
        name: "Joe",
        age: 67,
    },
]

console.log(getAge(obj)); // [13, 67, 54] 1 самый младший, 2 самый старший, 3 разница в возрасте.

export {}