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

export const solve = (board: string[][]) => {
  // Your code here
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
