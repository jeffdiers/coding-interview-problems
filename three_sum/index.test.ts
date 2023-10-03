import { threeSum } from "./index"; // Replace with the correct path to your solution file

describe("threeSum", () => {
  it("should find all unique triplets that sum to zero", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
    expect(threeSum([1, 2, -2, -1])).toEqual([]);
    expect(threeSum([3, 0, -2, -1, 1, 2])).toEqual([
      [-2, -1, 3],
      [-2, 0, 2],
      [-1, 0, 1],
    ]);
  });

  it("should handle empty input", () => {
    expect(threeSum([])).toEqual([]);
  });

  it("should handle input with fewer than three elements", () => {
    expect(threeSum([1])).toEqual([]);
    expect(threeSum([1, 2])).toEqual([]);
  });
});
