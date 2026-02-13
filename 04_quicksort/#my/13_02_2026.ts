const quickSort = (arr: number[]): number[] => {
    if (arr.length < 2) {
        return arr
    }

    const pivotIndex = Math.floor(Math.random() * arr.length)
    const pivot = arr[pivotIndex]

    const greater = []
    const equal = []
    const less = []

    for (let n of arr) {
        if (n > pivot) {
            greater.push(n)
        } else if (n < pivot) {
            less.push(n)
        } else {
            equal.push(n)
        }
    }

    return [...quickSort(less), ...equal, ...quickSort(greater)]
}

export {}