// Problem: Rotate Array

// Given an array of integers, rotate the array to the right
// by k steps, where k is a non-negative integer.

// Constraints:
// You must do this in-place without allocating extra space.
// The input array can be modified directly, which means you
// don't need to return anything.
// Create a function rotate that takes the array nums and an
// integer k as input and rotates the array to the right by
// k steps in-place.

export const rotate = (nums: number[], k: number) => {
  // Your code here
};

// Example
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotate(nums, k);
console.log(nums); // [5,6,7,1,2,3,4]
