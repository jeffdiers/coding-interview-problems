// Problem: Number of Connected Components in an Undirected Graph

// Given n nodes labeled from 0 to n - 1 and a list of undirected edges
// (each edge is a pair of nodes), write a function to find the number
// of connected components in the graph.

// This problem involves finding the number of connected components in
// an undirected graph, where nodes are connected by edges. You can
// use graph traversal techniques like Depth-First Search (DFS) or
// Breadth-First Search (BFS) to solve this problem.

export const countComponents = (n: number, edges: number[][]): number => {
  if (edges.length === 0) return n;

  // create adjacencyList
  const adjMap: Map<number, number[]> = new Map();

  for (const [n1, n2] of edges) {
    if (!adjMap.has(n1)) adjMap.set(n1, []);
    if (!adjMap.has(n2)) adjMap.set(n2, []);

    adjMap.get(n1)!.push(n2);
    adjMap.get(n2)!.push(n1);
  }

  // search logic
  let count: number = 0;
  const visited: Set<number> = new Set();

  // BFS function
  const bfs = (startNode: number) => {
    const queue: number[] = [startNode];
    visited.add(startNode);

    while (queue.length > 0) {
      const node = queue.shift()!;
      for (const neighbor of adjMap.get(node)!) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
        }
      }
    }
  };

  // DFS Function
  const dfs = (node: number) => {
    visited.add(node);
    for (const neighbor of adjMap.get(node)!) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
  };

  // search each node in list
  for (let node = 0; node < n; node++) {
    if (!visited.has(node)) {
      // bfs(node);
      dfs(node);
      count++;
    }
  }

  return count;
};

// Example
const n = 5;
const edges = [
  [0, 1],
  [1, 2],
  [3, 4],
];
const count = countComponents(n, edges);
console.log(count); // Output: 2 (There are two connected components: [0, 1, 2] and [3, 4])
