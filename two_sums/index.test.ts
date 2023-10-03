import { twoSum } from "./index"; // Replace with the correct path to your solution file

describe("twoSum", () => {
  it("should find indices of two numbers that add up to the target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it("should handle negative numbers", () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });

  it("should handle large numbers", () => {
    expect(twoSum([1000000000, 2000000000, 3000000000], 5000000000)).toEqual([
      1, 2,
    ]);
  });

  it("should handle no solution", () => {
    expect(twoSum([1, 2, 3, 4, 5], 10)).toBeNull();
  });

  it("should handle large arrays", () => {
    const arr = [];
    for (let i = 0; i < 1000000; i++) {
      arr.push(i);
    }
    expect(twoSum(arr, 199999)).toEqual([99999, 100000]);
  });
});
