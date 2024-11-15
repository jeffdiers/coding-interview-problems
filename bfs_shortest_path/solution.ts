// Problem Statement: Shortest Path in Binary Matrix

// Problem Description:
// Given an n x n binary matrix grid, where grid[i][j] = 1
// means the cell is blocked, and grid[i][j] = 0 means the
// cell is open, return the length of the shortest such clear
// path from the top-left corner (0, 0) to the bottom-right
// corner (n-1, n-1). If there is no clear path, return -1.

// A clear path is defined as a path from the top-left corner
// to the bottom-right corner consisting only of open cells.

// You can move up, down, left, right, or diagonally.

// Input:
// A binary matrix grid of size n x n where n is between 1 and 100.
// The matrix contains only 0s (open cells) and 1s (blocked cells).

// Output:
// An integer representing the length of the shortest clear path from
// (0, 0) to (n-1, n-1), or -1 if no clear path exists.

// Notes:
// You can move up, down, left, right, and diagonally.
// To solve this problem using BFS, you can start from the top-left
// corner (0, 0) and explore all possible valid moves while keeping
// track of the distance. You'll need to use a queue data structure to
// perform BFS.

export const shortestPathBinaryMatrix = (grid: number[][]) => {
  if (grid[0][0] === 1 || grid[grid.length - 1][grid[0].length - 1] === 1) {
    return -1;
  }

  const queue: number[][] = [[0, 0]];
  grid[0][0] = 1;
  let level = 1;

  while (queue.length > 0) {
    const levelSize: number = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const [a, b] = queue.shift()!;

      if (a === grid.length - 1 && b === grid[0].length - 1) {
        return level;
      }

      const paths = [
        [a + 1, b],
        [a - 1, b],
        [a, b + 1],
        [a, b - 1],
        [a - 1, b - 1],
        [a + 1, b + 1],
        [a - 1, b + 1],
        [a + 1, b - 1],
      ];

      for (const [dx, dy] of paths) {
        if (
          dx >= 0 &&
          dx < grid.length &&
          dy >= 0 &&
          dy < grid[0].length &&
          grid[dx][dy] === 0
        ) {
          grid[dx][dy] = 1;
          queue.push([dx, dy]);
        }
      }
    }

    level += 1;
  }

  return -1;
};

// Example
const grid1 = [
  [0, 1],
  [1, 1],
];
console.log(shortestPathBinaryMatrix(grid1)); // Should return -1

const grid2 = [
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1],
  [0, 0, 0, 0, 0],
];
console.log(shortestPathBinaryMatrix(grid2)); // Should return 8

const grid3 = [
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
];
console.log(shortestPathBinaryMatrix(grid3)); // Should return 4
