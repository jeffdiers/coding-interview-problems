import { canTravelMatrix } from "./index";

describe("canTravelMatrix function", () => {
  it("should return true", () => {
    const test1 = [
      [0, 1, 1, 0, 0],
      [0, 1, 1, 0, 1],
      [0, 0, 1, 0, 1],
      [1, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
    ];
    expect(canTravelMatrix(test1)).toBe(true);
  });

  it("should return false", () => {
    const test1 = [
      [0, 1, 1, 0, 0],
      [0, 1, 1, 0, 1],
      [0, 0, 1, 1, 1],
      [1, 0, 0, 1, 0],
      [0, 1, 1, 1, 0],
    ];
    expect(canTravelMatrix(test1)).toBe(false);
  });

  it("should handle none square matrix", () => {
    const test1 = [
      [0, 1, 1, 0, 0],
      [0, 1, 1, 0, 1],
      [0, 0, 1, 0, 1],
      [1, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 1, 0, 0],
      [1, 0, 0, 0, 1],
      [0, 1, 1, 1, 1],
      [1, 0, 0, 0, 0],
    ];
    expect(canTravelMatrix(test1)).toBe(true);

    const test2 = [
      [0, 1, 1, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 1, 1, 0],
      [0, 0, 1, 0, 1, 0, 0, 0],
    ];
    expect(canTravelMatrix(test2)).toBe(true);
  });

  it("should handle edge cases", () => {
    // Test with an empty matrix
    const test1: number[][] = [];
    expect(canTravelMatrix(test1)).toBe(false);

    // Test with a matrix containing a single element
    const test2 = [[0]];
    expect(canTravelMatrix(test2)).toBe(true);

    // Test with a matrix containing a single row
    const test3 = [[0, 0, 0, 0]];
    expect(canTravelMatrix(test3)).toBe(true);

    // Test with a matrix containing a single column
    const test4 = [[0], [0], [0], [0]];
    expect(canTravelMatrix(test4)).toBe(true);
  });
});
