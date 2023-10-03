// Problem Description:
// Given n non-negative integers a1, a2, ..., an, where each
// represents a point at coordinate (i, ai). n vertical lines
// are drawn, such that the two endpoints of the line i are
// at (i, ai) and (i, 0).

// Find two lines, which, together with the x-axis, forms a
// container that can hold the most water.

// Return the maximum area of the container.

// For example, given height = [1,8,6,2,5,4,8,3,7], the function
// should return 49, as the container with height 8 and width 7
// (distance between index 1 and 6) can hold the most water.

// Input:
// An array of non-negative integers height, where height[i]
// represents the height of the i-th line.

// Output:
// An integer representing the maximum area that can be formed
// by the lines.

// Note:
// You cannot slant the container.
// This problem involves finding the pair of lines that maximize
// the area of the container formed between them. The area is
// determined by the minimum height of the two lines and the
// width between them.

export const maxArea = (height: number[]) => {
  // Your code here
};

// Example
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Should return 49
console.log(maxArea([1, 1])); // Should return 1
console.log(maxArea([4, 3, 2, 1, 4])); // Should return 16
