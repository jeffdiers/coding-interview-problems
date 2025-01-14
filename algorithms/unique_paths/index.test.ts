import { uniquePaths } from "./index"; // Import your solution function

describe("Unique Paths", () => {
  it("should return 1 for a 1x1 grid", () => {
    expect(uniquePaths(1, 1)).toBe(1);
  });

  it("should return 28 for a 3x7 grid", () => {
    expect(uniquePaths(3, 7)).toBe(28);
  });

  it("should return 3 for a 3x2 grid", () => {
    expect(uniquePaths(3, 2)).toBe(3);
  });

  it("should return 6 for a 3x3 grid", () => {
    expect(uniquePaths(3, 3)).toBe(6);
  });

  it("should return 20 for a 4x4 grid", () => {
    expect(uniquePaths(4, 4)).toBe(20);
  });
});
