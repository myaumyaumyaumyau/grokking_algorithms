const quickSort = (arr: number[]): number[] => {
    if (arr.length < 2) {
        return arr
    }

    const pivotIndex = Math.floor(Math.random() * arr.length)
    const pivot = arr[pivotIndex]

    const less = []
    const equal = []
    const greater = []

    for (let num of arr) {
        if (num < pivot) {
            less.push(num)
        } else if (num > pivot) {
            greater.push(num)
        } else {
            equal.push(num)
        }
    }

    return [...quickSort(less), ...equal, ...quickSort(greater)]
}