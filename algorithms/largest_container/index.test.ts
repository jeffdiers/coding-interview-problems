import { maxArea } from "./index"; // Replace with the correct path to your solution file

describe("maxArea", () => {
  it("should find the maximum area between two lines", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    expect(maxArea([1, 1])).toBe(1);
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
    expect(maxArea([1, 2, 1])).toBe(2);
  });

  it("should handle empty input", () => {
    expect(maxArea([])).toBe(0);
  });

  it("should handle input with a single line", () => {
    expect(maxArea([5])).toBe(0);
  });
});
