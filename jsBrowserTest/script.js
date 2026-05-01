const findSmallestIndex = (arr, index = 0) => {
    let smallest = index

    for (let i = index + 1; i < arr.length; i++) {
        if (arr[i] < arr[smallest]) {
            smallest = i
        }
    }

    return smallest
}

const selectedSortRecursive = (arr, index = 0) => {
    const newArr = index === 0 ? [...arr] : arr;

    // Лог при входе в рекурсию (погружение)
    console.log(`-> Вход: index = ${index}, массив сейчас: [${newArr}]`);

    if (index === arr.length - 1) {
        console.log(`! Базовый случай достигнут на индексе ${index}. Начинаем возврат...`);
        return newArr;
    }

    const smallest = findSmallestIndex(newArr, index);
    [newArr[smallest], newArr[index]] = [newArr[index], newArr[smallest]];

    const result = selectedSortRecursive(newArr, index + 1);

    // Лог после того, как вложенный вызов вернул результат (подъем)
    console.log(`<- Возврат на уровень index = ${index}, получили: [${result}]`);

    return result;
}

// selectedSortRecursive([6, 5, 7, 2,])


const createCounter = () => {
    let count = 0

    const increment = () => {
        count += 1
    }

    return {count, increment}
}

const myCounter = createCounter()
myCounter.increment()
myCounter.increment()
console.log(myCounter.count)
// =========================================
const createCounter2 = () => {
    let count = 0

    const increment = () => {
        count += 1
    }

    return {count: () => count, increment}
}

const myCounter2 = createCounter2()
myCounter2.increment()
myCounter2.increment()
console.log(myCounter2.count())
