// Problem Statement: Surrounded Regions

// Problem Description:
// Given an m x n board containing 'X' and 'O', capture all
// regions surrounded by 'X'. A region is captured by flipping
// all 'O's into 'X's in that surrounded region.

// Surrounded regions are regions that are not adjacent
// (vertically or horizontally) to any 'X'.

// Input:
// A 2D board of characters board where each cell contains either 'X' or 'O'.

// Output:
// Modify the input board in-place to capture all surrounded regions.

// Notes:
// The captured regions are surrounded by 'X'.
// Any 'O' that is not surrounded by 'X' should remain as 'O'.
// To solve this problem using DFS, you can start by identifying the 'O'
// cells on the boundary of the board. Then, perform DFS from these boundary
// cells to mark all connected 'O' cells that are not surrounded by 'X'.
// Finally, iterate through the entire board and modify the cells based on
// your DFS traversal.

export const solve = (board: string[][]): string[][] => {
  if (board.length === 0) return board;

  const m = board.length;
  const n = board[0].length;

  const dfs = (node: number[]): void => {
    const [x, y] = node;

    // check for bounds
    if (x < 0 || x >= m || y < 0 || y >= n) return;
    // if X return false
    if (board[x][y] !== "O") return;

    board[x][y] = "#"; // mark visited

    const traverse = [
      [x + 1, y],
      [x, y + 1],
      [x - 1, y],
      [x, y - 1],
    ];

    for (const dnode of traverse) {
      dfs(dnode);
    }
  };

  // loop through outside
  for (let i = 0; i < m; i++) {
    if (board[i][0] === "O") dfs([i, 0]);
    if (board[i][n - 1] === "O") dfs([i, n - 1]);
  }
  for (let i = 0; i < n; i++) {
    if (board[0][i] === "O") dfs([0, i]);
    if (board[m - 1][i] === "O") dfs([m - 1, i]);
  }

  // loop throught the whole board
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "O") board[i][j] = "X";
      if (board[i][j] === "#") board[i][j] = "O";
    }
  }

  return board;
};

// Example
const board = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];
console.log(solve(board));

// The modified board should be:
// [
//   ['X', 'X', 'X', 'X'],
//   ['X', 'X', 'X', 'X'],
//   ['X', 'X', 'X', 'X'],
//   ['X', 'O', 'X', 'X']
// ]
