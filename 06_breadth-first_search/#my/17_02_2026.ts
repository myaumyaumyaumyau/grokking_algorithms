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

const bfs = (node: string, target: string, network: Record<string, string[]>): string | null => {
    if (node === target) {
        return node
    }

    const queue = [node]
    const visited = new Set([node])

    for (let i = 0; i < queue.length; i++) {
        let currentNode = queue[i]
        let neighbors = network[currentNode] ?? []

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

    return null
}

const bfsWithPath = (node: string, target: string, network: Record<string, string[]>): string[] => {
    if (node === target) {
        return [node]
    }

    const queue = [node]
    const visited = new Set([node])
    const parent: Record<string, string> = {}

    for (let i = 0; i < queue.length; i++) {
        const currentNode = queue[i]
        const neighbors = network[currentNode] ?? []

        for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor)
                queue.push(neighbor)

                parent[neighbor] = currentNode

                if (neighbor === target) {
                    let path = [target]
                    let current = target

                    while (current !== node) {
                        path.push(parent[current])
                        current = parent[current]
                    }
                    return path.reverse()
                }
            }
        }
    }

    return []
}

export {}