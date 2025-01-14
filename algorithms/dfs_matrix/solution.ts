// Given a matrix and starting at the top left
// find if you can reach the bottom left corner.
// The matrix has either a 0 to pass or 1 that blocks.
// If you can reach the end return true, otherwise return false.

export const canTravelMatrix = (matrix: number[][]) => {
  const dfs = (x: number, y: number): boolean => {
    // Check for out of bounds or hit a gate
    if (x < 0 || x > matrix.length - 1) return false;
    if (y < 0 || y > matrix[0].length - 1) return false;
    if (matrix[x][y] === 1) return false;

    // Check if at the end and return true
    if (x === matrix.length - 1 && y === matrix[0].length - 1) return true;

    // Mark as visited
    matrix[x][y] = 1;

    const traverse = [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
      [x + 1, y + 1],
      [x + 1, y - 1],
      [x - 1, y - 1],
      [x - 1, y + 1],
    ];
    for (const [dx, dy] of traverse) {
      if (dfs(dx, dy)) return true;
    }

    return false;
  };

  return dfs(0, 0);
};

// example
const matrix = [
  [0, 1, 1, 0, 0],
  [0, 1, 1, 0, 1],
  [0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
];

console.log(canTravelMatrix(matrix)); // returns true
