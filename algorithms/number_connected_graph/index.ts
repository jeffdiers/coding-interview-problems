// Problem: Number of Connected Components in an Undirected Graph

// Given n nodes labeled from 0 to n - 1 and a list of undirected edges
// (each edge is a pair of nodes), write a function to find the number
// of connected components in the graph.

// This problem involves finding the number of connected components in
// an undirected graph, where nodes are connected by edges. You can
// use graph traversal techniques like Depth-First Search (DFS) or
// Breadth-First Search (BFS) to solve this problem.

export const countComponents = (n: number, edges: number[][]) => {
  // Your code here
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
