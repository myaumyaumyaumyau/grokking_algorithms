const quicksort = (arr: number[]): number[] => {
    if (arr.length < 2) {
        return arr
    }

    const pivotIndex = Math.floor(Math.random() * arr.length)
    const pivot = arr[pivotIndex]

    const rest = arr.slice(0, pivotIndex).concat(arr.slice(pivotIndex + 1))

    const lessThanPivot = rest.filter(n => n <= pivot)
    const greaterThanPivot = rest.filter(n => n > pivot)

    return [...quicksort(lessThanPivot), pivot, ...quicksort(greaterThanPivot)]
}

const quicksort2 = (arr: number[]): number[] => {
    if (arr.length < 2) {
        return arr
    }

    const pivotIndex = Math.floor(Math.random() * arr.length)
    const pivot = arr[pivotIndex]

    const lessThanPivot: number[] = []
    const greaterThanPivot: number[] = []
    const equalToPivot: number[] = []

    for (let n of arr) {
        if (n > pivot) {
            greaterThanPivot.push(n)
        } else if (n < pivot) {
            lessThanPivot.push(n)
        } else {
            equalToPivot.push(n)
        }
    }

    return [...quicksort2(lessThanPivot), ...equalToPivot, ...quicksort2(greaterThanPivot)]
}

export {}