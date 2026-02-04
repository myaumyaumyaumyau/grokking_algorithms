const graphi = {
    'you': ['alice', 'bob', 'claire'],
    'bob': ['anuj', 'peggy'],
    'alice': ['peggy'],
    'claire': ['thom', 'jonny'],
    'anuj': [],
    'peggy': [],
    'thom': [],
    'jonny': [],
}

// Аухеть просто я с первого раза написал идеально
const bfs = (
    startNode: string,
    target: string,
    network: Record<string, string[]>
): boolean => {
    if (startNode === target) {
        return true
    }

    const queue: string[] = [startNode]
    const visited = new Set<string>([startNode])

    let i = 0

    while (i < queue.length) {
        const currentNode = queue[i++]
        const childNode = network[currentNode] || []

        for (let child of childNode) {
            if (!visited.has(child)) {
                if (child === target) {
                    return true
                }

                visited.add(child)
                queue.push(child)
            }
        }
    }

    return false
}

console.log(bfs('you', 'thom', graphi))
export {}