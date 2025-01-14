// Problem Statement: Search in Rotated Sorted Array

// Problem Description:
// You are given an integer array nums sorted in ascending order,
// which is rotated at some unknown pivot. You have a target value
// target and want to determine if it exists in the array. If the
// target exists in the array, return its index; otherwise, return -1.

// For example, given the array nums = [4,5,6,7,0,1,2] and target = 0,
// return 4, as 0 is found at index 4 in the rotated array.

// Input:
// An integer array nums sorted in ascending order, rotated at some unknown pivot.
// An integer target to search for in the array.

// Output:
// An integer representing the index of target in the array, or -1 if it's not found.

// Note:
// You can assume that nums does not contain any duplicates.
// The time complexity of your solution should be O(log n), where n is the length of nums.

export const search = (nums: number[], target: number): number => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) return mid;

    if (nums[left] < nums[mid]) {
      // left is sorted
      if (nums[left] <= target && nums[mid] > target) {
        // target is in the left
        right = mid - 1;
      } else {
        // target is in the right
        left = mid + 1;
      }
    } else {
      // right is sorted
      if (nums[mid] <= target && nums[right] >= target) {
        // target in right
        left = mid + 1;
      } else {
        // target in left
        right = mid - 1;
      }
    }
  }

  return -1;
};

// Example
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // Should return 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // Should return -1
console.log(search([1], 0)); // Should return -1
