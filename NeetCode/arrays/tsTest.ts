const X = {a: 1, b: 2, c: 3, d: 4,}

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key]
}

getProperty(X, 'a')