// Given a matrix and starting at the top left
// find if you can reach the bottom left corner.
// The matrix has either a 0 to pass or 1 that blocks.
// If you can reach the end return true, otherwise return false.

export const canTravelMatrix = (matrix) => {
  // Your code here
};

// example
const matrix = [
  [0, 1, 1, 0, 0],
  [0, 1, 1, 0, 1],
  [0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
];

console.log(canTravelMatrix(matrix)); // returns true
