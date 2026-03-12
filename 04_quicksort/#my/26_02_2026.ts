const quickSort = (arr: number[], s = 0, e = arr.length - 1): number[] => {
    if (e - s + 1 <= 1) {
        return arr
    }

    const pivotIndex = Math.floor(Math.random() * (e - s + 1) + s)
    ;[arr[pivotIndex], arr[e]] = [arr[e], arr[pivotIndex]]

    let left = s

    for (let i = s; i < e; i++) {
        if (arr[i] < arr[e]) {
            ;[arr[left], arr[i]] = [arr[i], arr[left]]
            left++
        }
    }

    ;[arr[e],arr[left]] = [arr[left], arr[e]]

    quickSort(arr, s, left - 1)
    quickSort(arr, left + 1, e)


    return arr
}

export {}