const quickSort = (arr: number[]): number[] => {
    if (arr.length < 2) return arr

    const pivotIndex = Math.floor(Math.random() * arr.length)
    const pivot = arr[pivotIndex]

    const less: number[] = []
    const greater: number[] = []
    const equal: number[] = []

    for (let number of arr) {
        if (number > pivot) greater.push(number)
        else if (number < pivot) less.push(number)
        else equal.push(number)
    }

    return [...quickSort(less), ...equal, ...quickSort(greater)]
}

export {}