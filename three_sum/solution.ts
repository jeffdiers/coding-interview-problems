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

export const threeSum = (nums: number[]): number[][] => {
  const result: number[][] = [];
  const n = nums.length;

  if (n < 3) {
    return result;
  }

  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

// Example
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Should return [ [-1, -1, 2], [-1, 0, 1] ]
console.log(threeSum([0, 0, 0])); // Should return [ [0, 0, 0] ]
