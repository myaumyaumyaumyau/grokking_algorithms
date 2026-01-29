const quicksort = (arr: number[]): number[] => {
    if (arr.length < 2) {
        return arr
    }

    const pivotIndex = Math.floor(Math.random() * arr.length)
    const pivot = arr[pivotIndex]

    const rest = arr.slice(0, pivotIndex).concat(arr.slice(pivotIndex + 1))

    const lessThanPivot = quicksort(rest.filter(n => n <= pivot))
    const greaterThanPivot = quicksort(rest.filter(n => n > pivot))

    return [...lessThanPivot, pivot, ...greaterThanPivot]
}