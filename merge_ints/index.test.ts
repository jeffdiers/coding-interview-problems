import { mergeIntervals } from "./index"; // Replace with the correct path to your solution file

describe("mergeIntervals", () => {
  it("should merge overlapping intervals", () => {
    const intervals = [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ];
    const expectedMerged = [
      [1, 6],
      [8, 10],
      [15, 18],
    ];
    expect(mergeIntervals(intervals)).toEqual(expectedMerged);
  });

  it("should handle non-overlapping intervals", () => {
    const intervals = [
      [1, 2],
      [4, 5],
      [8, 9],
    ];
    const expectedMerged = [
      [1, 2],
      [4, 5],
      [8, 9],
    ];
    expect(mergeIntervals(intervals)).toEqual(expectedMerged);
  });

  it("should merge partially overlapping intervals", () => {
    const intervals = [
      [1, 4],
      [2, 5],
      [6, 8],
    ];
    const expectedMerged = [
      [1, 5],
      [6, 8],
    ];
    expect(mergeIntervals(intervals)).toEqual(expectedMerged);
  });

  it("should handle empty input", () => {
    const intervals: number[][] = [];
    const expectedMerged: number[][] = [];
    expect(mergeIntervals(intervals)).toEqual(expectedMerged);
  });

  it("should merge when there is a single interval", () => {
    const intervals = [[1, 3]];
    const expectedMerged = [[1, 3]];
    expect(mergeIntervals(intervals)).toEqual(expectedMerged);
  });
});
