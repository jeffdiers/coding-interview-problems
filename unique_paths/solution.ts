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
  const dp: number[][] = new Array(n).fill(new Array(m).fill(1));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i > 0 && j > 0) dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[n - 1][m - 1];
};

// Example
console.log(uniquePaths(3, 7)); // Should return 28
