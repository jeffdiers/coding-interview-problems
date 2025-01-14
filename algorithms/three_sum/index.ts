// Problem Statement: Three Sum

// Problem Description:
// Given an array nums of n integers, find all unique triplets
// in the array which gives the sum of zero.

// For example, given the array [-1, 0, 1, 2, -1, -4], the
// function should return all unique triplets such that their
// sum is zero. In this case, the possible triplets are
// [-1, 0, 1] and [-1, -1, 2].

// Input:
// An array nums containing n integers.

// Output:
// An array of arrays, where each inner array represents a
// unique triplet of integers that sums to zero.

// Note:
// The solution set must not contain duplicate triplets. In
// the example, [-1, -1, 2] and [-1, 2, -1] are considered
// duplicates, so only one of them should be included in the
// result.
// This problem involves finding all unique triplets in an
// array that sum to zero. You'll need to efficiently explore
// different combinations of triplets and ensure that the result
// does not contain duplicates.

export const threeSum = (nums: number[]) => {
  // Your code here
};

// Example
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Should return [ [-1, -1, 2], [-1, 0, 1] ]
console.log(threeSum([0, 0, 0])); // Should return [ [0, 0, 0] ]
