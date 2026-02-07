const quicksort = (arr: number[]): number[] => {
    if (arr.length < 2) {
        return arr
    }

    const pivotIndex = Math.floor(Math.random() * arr.length)
    const pivot = arr[pivotIndex]

    const rest = arr.slice(0, pivotIndex).concat(arr.slice(pivotIndex + 1))

    const lessThanPivot = rest.filter(n => n <= pivot)
    const greaterThanPivot = rest.filter(n => n > pivot)

    return [
        ...quicksort(lessThanPivot),
        pivot,
        ...quicksort(greaterThanPivot)
    ]
}

const anotherQuicksort = (arr: number[]): number[] => {
    if (arr.length < 2) {
        return arr
    }

    const pivotIndex = Math.floor(Math.random() * arr.length)
    const pivot = arr[pivotIndex]

    const less = []
    const greater = []
    const equal = []

    for (let number of arr) {
        if (number > pivot) {
            greater.push(number)
        } else if (number < pivot) {
            less.push(number)
        } else {
            equal.push(number)
        }
    }

    return [...anotherQuicksort(less), ...equal, ...anotherQuicksort(greater)]
}

export {}