// Problem Statement:

// You are given a directed graph as an adjacency list,
// represented by a dictionary where each key is a node,
// and its corresponding value is a list of nodes it is
// connected to. Implement a function hasPath that takes
// the graph, a starting node, and a target node as input
// and returns true if there is a path from the starting
// node to the target node, and false otherwise.

// Constraints:

// The graph is represented as an adjacency list.
// The graph may contain cycles.
// The input nodes start and target will always exist in the graph.
// Your task is to implement the hasPath function in TypeScript to solve this
// problem using Depth-First Search.

export const hasPath = (
  graph: Record<string, string[]>,
  start: string,
  target: string
) => {
  // Your code here
};

// Example:
const graph: Record<string, string[]> = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: [],
};

console.log(hasPath(graph, "A", "F")); // Output: true (A -> C -> F)
console.log(hasPath(graph, "B", "C")); // Output: false
console.log(hasPath(graph, "A", "D")); // Output: true (A -> B -> D)
console.log(hasPath(graph, "A", "A")); // Output: true (A is connected to itself)
// In this example, the hasPath function should return true if there is a path from
// the starting node to the target node, and false otherwise.
