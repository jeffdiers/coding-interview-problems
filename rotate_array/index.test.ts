import { rotate } from "./index";

describe("Rotate Array", () => {
  it("should rotate the array to the right by 3 steps", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    const k = 3;
    rotate(nums, k);
    expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it("should rotate the array to the right by 2 steps", () => {
    const nums = [-1, -100, 3, 99];
    const k = 2;
    rotate(nums, k);
    expect(nums).toEqual([3, 99, -1, -100]);
  });

  it("should not rotate the empty array", () => {
    const nums: number[] = [];
    const k = 5;
    rotate(nums, k);
    expect(nums).toEqual([]);
  });

  it("should handle zero steps rotation", () => {
    const nums = [1, 2, 3];
    const k = 0;
    rotate(nums, k);
    expect(nums).toEqual([1, 2, 3]);
  });
});
