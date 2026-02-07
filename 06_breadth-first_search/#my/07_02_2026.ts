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
        const currentNode = queue[i]
        i++
        const neighbors = network[currentNode] || []

        for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                if (neighbor === target) {
                    return true
                }

                visited.add(neighbor)
                queue.push(neighbor)
            }
        }
    }

    return false
}

console.log(bfs('you', 'thom', graphi))
export {}