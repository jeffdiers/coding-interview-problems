// Problem: Longest Increasing Subsequence

// Given an unsorted array of integers, find the length of
// the longest increasing subsequence.

// Constraints:
// Your solution should run in O(n^2) time complexity.

// Create a function lengthOfLIS that takes the array nums
// as input and returns the length of the longest
// increasing subsequence.

export const lengthOfLIS = (nums: number[]): number => {
  const n = nums.length;
  if (n === 0) return 0;

  const dp: number[] = new Array(n).fill(1); // Initialize a DP array with all elements set to 1

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp); // Return the maximum value in the DP array
};

// Example
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums)); // should return 4 -> [2, 3, 7, 101]
