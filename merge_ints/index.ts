// Problem Statement: Merge Intervals

// Problem Description:
// Given an array of intervals, where each interval is represented
// as an array [start, end], merge overlapping intervals and return
// an array of the non-overlapping intervals.

// For example, given the input: [[1, 3], [2, 6], [8, 10], [15, 18]],
// the output should be [[1, 6], [8, 10], [15, 18]].

// Input:

// An array of intervals, where each interval is represented as
// [start, end], where start and end are integers.
// Output:

// An array of merged non-overlapping intervals.

// You can assume that the input intervals are sorted in ascending order of their start times.
// The input intervals may be overlapping, and your task is to merge them into non-overlapping intervals.

export const mergeIntervals = (intervals: number[][]) => {
  // Your code here
};

// Example:
const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
const merged = mergeIntervals(intervals);
console.log(merged); // Should output [[1, 6], [8, 10], [15, 18]]
