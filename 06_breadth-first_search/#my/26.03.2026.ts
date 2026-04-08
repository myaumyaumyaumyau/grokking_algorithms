
// ахуеть с первого раза верно решил спустя полтора месяца
const BFS = (root: string, item: string, network: Record<string, string[]>): string => {
    if (!root) {
        return 'no such item'
    }

    if (root === item) {
        return item
    }

    const queue = [root]
    const visited = new Set([root])

    for (let i = 0; i < queue.length; i++) {
        const current = queue[i]
        const neighbors = network[current] ?? []

        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                if (neighbor === item) {
                    return item
                }

                visited.add((neighbor))
                queue.push(neighbor)
            }
        }
    }

    return 'no such item'
}

// тоже с первого раза но забыл что надо делать условие curr !== root
const BFSWithPath = (root: string, item: string, network: Record<string, string[]>): string[] | null => {
    if (!root) {
        return null
    }

    if (root === item) {
        return [item]
    }

    const parent = {}
    const queue = [root]
    const visited = new Set([root])

    for (let i = 0; i < queue.length; i++) {
        const current = queue[i]
        const neighbors = network[current] ?? []

        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                parent[neighbor] = current

                if (neighbor === item) {
                    let curr = neighbor
                    const path = [curr]

                    while (curr !== root) {
                        curr = parent[curr]
                        path.push(curr)
                    }

                    return path.reverse()
                }

                visited.add(neighbor)
                queue.push((neighbor))
            }
        }
    }

    return null
}