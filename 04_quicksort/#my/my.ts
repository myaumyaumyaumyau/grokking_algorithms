// Реализация алгоритма QuickSort со схемой разбиения Ломуто (Lomuto partition scheme)
// тут объяснение норм https://youtu.be/rQ9sJfnvXFs?si=L32qTXscVfQ42bIb

// логика работает так:
// 1. Переменная j сканирует массив от low до high.
// 2. Переменная i хранит границу элементов, которые меньше пивота.
// 3. В конце пивот встает на своё законное место (i + 1).

function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high] // const, так как сам пивот не меняется
    let i = low - 1

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++
            [arr[j], arr[i]] = [arr[i], arr[j]]
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
    return i + 1
}

const quicksort = (
    arr: number[],
    low: number = 0,
    high: number = arr.length - 1
): number[] => {
    if (low >= high) {
        return arr
    }

    const pivotIndex = partition(arr, low, high)

    quicksort(arr, low, pivotIndex - 1)
    quicksort(arr, pivotIndex + 1, high)

    return arr
}

// Теперь вызов выглядит чисто:
const data = [5, 2, 9, 1, 5, 6]
quicksort(data)
// но важно что этот подход мутирует исходных массив. но можно вызывать вот так quicksort([...data]) и тогда все норм
