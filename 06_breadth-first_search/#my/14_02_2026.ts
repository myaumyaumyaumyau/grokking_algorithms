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

const bfs = (node: string, target: string, network: Record<string, string[]>): string => {
    if (node === target) {
        return target
    }

    const queue = [node]
    const visited = new Set<string>([node])

    let i = 0

    while (i < queue.length) {
        const currentNode = queue[i++]
        const neighbors = network[currentNode]

        for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                if (neighbor === target) {
                    return neighbor
                }

                visited.add(neighbor)
                queue.push(neighbor)
            }
        }
    }

    return 'not found'
}

const bfsWithPath = (startNode: string, target: string, network: Record<string, string[]>): string[] | string => {
    if (startNode === target) {
        return [target]
    }

    const queue = [startNode]
    const visited = new Set<string>([startNode])
    const parent: Record<string, string> = {}

    for (let i = 0; i < queue.length; i++) {
        const currentNode = queue[i]
        const neighbors = network[currentNode]

        for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                parent[neighbor] = currentNode

                if (neighbor === target) {
                    const path = [target]
                    let current = target

                    while (current !== startNode) {
                        current = parent[current]
                        path.push(current)
                    }

                    return path.reverse()
                }

                visited.add(neighbor)
                queue.push(neighbor)
            }
        }
    }

    return 'Not found :('
}



export {}