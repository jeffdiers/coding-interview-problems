// Problem Statement: Word Search

// Problem Description:
// Given an m x n grid of characters board and a string
// word, return true if word exists in the grid. The word
// can be constructed from letters of sequentially adjacent
// cells, where "adjacent" cells are horizontally or
// vertically neighboring. The same letter cell may not be
// used more than once.

// Input:
// A 2D grid of characters board where each cell contains
// a lowercase English letter. A string word consisting of
// lowercase English letters.

// Output:
// true if the word exists in the grid, false otherwise.

// Notes:
// The word can be constructed from letters of sequentially
// adjacent cells, where adjacent cells are horizontally or
// vertically neighboring.
// The same letter cell may not be used more than once.
// To solve this problem using DFS, you can explore the grid
// by starting from each cell and recursively searching for
// the characters of the word while keeping track of visited
// cells. If you find a path that matches the word, return true.

export const exist = (board: string[][], word: string): boolean => {
  if (board.length === 0) return false;

  const xn = board.length;
  const yn = board[0].length;

  const dfs = (node: number[], index: number): boolean => {
    const [x, y] = node;

    // check if out of bounds
    if (x < 0 || x >= xn) return false;
    if (y < 0 || y >= yn) return false;
    // check if first letter in word
    if (word[index] !== board[x][y]) return false;

    const original = board[x][y];
    board[x][y] = "#"; // mark visited

    // check if word complete
    if (word.length - 1 === index) return true;

    const traverse = [
      [x + 1, y],
      [x, y + 1],
      [x - 1, y],
      [x, y - 1],
      [x + 1, y + 1],
      [x - 1, y - 1],
      [x + 1, y - 1],
      [x - 1, y + 1],
    ];

    index += 1;

    for (const node of traverse) {
      if (dfs(node, index)) return true;
    }

    board[x][y] = original;
    return false;
  };

  for (let i = 0; i < xn; i++) {
    for (let j = 0; j < yn; j++) {
      if (dfs([i, j], 0)) return true;
    }
  }

  return false;
};

// Example
const board1 = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

console.log(exist(board1, "ABCCED")); // Should return true

const board2 = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

console.log(exist(board2, "SEE")); // Should return true

const board3 = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

console.log(exist(board3, "ABCB")); // Should return false
