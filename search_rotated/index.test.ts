import { search } from "./index"; // Replace with the correct path to your solution file

describe("search", () => {
  it("should find the target in the rotated sorted array", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
    expect(search([1], 0)).toBe(-1);
    expect(search([1, 3], 1)).toBe(0);
    expect(search([3, 1], 0)).toBe(-1);
  });

  it("should handle empty input", () => {
    expect(search([], 0)).toBe(-1);
  });

  it("should handle input with a single element", () => {
    expect(search([5], 5)).toBe(0);
    expect(search([5], 3)).toBe(-1);
  });
});
