// Problem: Unique Paths

// Description:

// A robot is located at the top-left corner of an m x n grid.
// It can only move either down or right at any point in time.
// The robot is trying to reach the bottom-right corner of the grid.

// How many unique paths are there?

// Input:
// m and n are positive integers, where m represents the number of
// rows and n represents the number of columns in the grid.

// Output:
// Return the number of unique paths the robot can take to reach
// the bottom-right corner.

export const uniquePaths = (n: number, m: number): number => {
  const matrix: number[][] = [];
  for (let i = 0; i < n; i++) {
    console.log(matrix);
    matrix[i] = [];
    for (let j = 0; j < m; j++) {
      matrix[i][j] = i > 0 && j > 0 ? matrix[i - 1][j] + matrix[i][j - 1] : 1;
    }
  }
  return matrix[n - 1][m - 1];
};

// Example
console.log(uniquePaths(3, 7)); // Should return 28
