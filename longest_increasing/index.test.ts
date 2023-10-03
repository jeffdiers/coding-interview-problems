import { lengthOfLIS } from "./index";

describe("Longest Increasing Subsequence", () => {
  it("should return 4 for [10, 9, 2, 5, 3, 7, 101, 18]", () => {
    const nums = [10, 9, 2, 5, 3, 7, 101, 18];
    const result = lengthOfLIS(nums);
    expect(result).toBe(4);
  });

  it("should return 3 for [5, 3, 1, 6, 2, 2, 7]", () => {
    const nums = [5, 3, 1, 6, 2, 2, 7];
    const result = lengthOfLIS(nums);
    expect(result).toBe(3);
  });

  it("should return 1 for [7, 7, 7, 7, 7, 7, 7]", () => {
    const nums = [7, 7, 7, 7, 7, 7, 7];
    const result = lengthOfLIS(nums);
    expect(result).toBe(1);
  });

  it("should return 0 for an empty array", () => {
    const nums: number[] = [];
    const result = lengthOfLIS(nums);
    expect(result).toBe(0);
  });
});
