// Problem Statement: Two Sum

// Problem Description:
// Given an array of integers nums and an integer target,
// return the indices of the two numbers such that they
// add up to the target.

// You may assume that each input has exactly one solution,
// and you may not use the same element twice. You can
// return the answer in any order.

// Input:
// An array of integers nums (e.g., [2, 7, 11, 15]).
// An integer target (e.g., 9).

// Output:
// An array of two integers, representing the indices of
// the two numbers that add up to the target.

// Note:
// You may assume that there is exactly one solution for each input.
// You cannot use the same element twice.

export const twoSum = (nums: number[], target: number): number[] | null => {
  // Your code here
  const map: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const pair = target - nums[i];
    if (map.hasOwnProperty(pair)) {
      return [map[pair], i];
    }

    map[nums[i]] = i;
  }
  return null;
};

console.log(twoSum([2, 7, 11, 15], 9)); // Should return [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Should return [1, 2]
console.log(twoSum([3, 3], 6)); // Should return [0, 1]
