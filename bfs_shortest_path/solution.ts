// Problem Statement: Shortest Path in Binary Matrix

// Problem Description:
// Given an n x n binary matrix grid, where grid[i][j] = 1
// means the cell is blocked, and grid[i][j] = 0 means the
// cell is open, return the length of the shortest such clear
// path from the top-left corner (0, 0) to the bottom-right
// corner (n-1, n-1). If there is no clear path, return -1.

// A clear path is defined as a path from the top-left corner
// to the bottom-right corner consisting only of open cells.

// You can move up, down, left, and right. You cannot move diagonally.

// Input:
// A binary matrix grid of size n x n where n is between 1 and 100.
// The matrix contains only 0s (open cells) and 1s (blocked cells).
// The top-left and bottom-right cells (grid[0][0] and grid[n-1][n-1])
// are always open.

// Output:
// An integer representing the length of the shortest clear path from
// (0, 0) to (n-1, n-1), or -1 if no clear path exists.

// Notes:
// You can move up, down, left, and right, but not diagonally.
// The top-left and bottom-right cells are always open.
// To solve this problem using BFS, you can start from the top-left
// corner (0, 0) and explore all possible valid moves while keeping
// track of the distance. You'll need to use a queue data structure to
// perform BFS.

export const shortestPathBinaryMatrix = (grid: number[][]): number => {
  if (grid[0][0] === 1 || grid[grid.length - 1][grid.length - 1] === 1) {
    // The start or end cell is blocked, no valid path
    return -1;
  }
  let result: number = 1;
  let queue: number[][] = [[0, 0]];
  grid[0][0] = 1;

  while (queue.length > 0) {
    const levelSize: number = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const curr = queue.shift()!;
      const a = curr[0];
      const b = curr[1];

      if (a === grid.length - 1 && b === grid[0].length - 1) {
        return result;
      }

      const traverse = [
        [a + 1, b],
        [a, b + 1],
        [a - 1, b],
        [a, b - 1],
        // [a + 1, b + 1], // diaognals
        // [a - 1, b - 1],
        // [a + 1, b - 1],
        // [a - 1, b + 1],
      ];

      for (const [dx, dy] of traverse) {
        if (
          dx >= 0 &&
          dx < grid.length &&
          dy >= 0 &&
          dy < grid[0].length &&
          grid[dx][dy] === 0
        ) {
          queue.push([dx, dy]);
          grid[dx][dy] = 1;
        }
      }
    }

    result += 1;
  }

  return -1;
};

// Example
const grid1 = [
  [0, 1],
  [1, 0],
];
console.log(shortestPathBinaryMatrix(grid1)); // Should return -1

const grid2 = [
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1],
  [0, 0, 0, 0, 0],
];
console.log(shortestPathBinaryMatrix(grid2)); // Should return 11

const grid3 = [
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
];
console.log(shortestPathBinaryMatrix(grid3)); // Should return 5
