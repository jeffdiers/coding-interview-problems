import { shortestPathBinaryMatrix } from "./index"; // Replace with the correct path to your solution file

describe("shortestPathBinaryMatrix", () => {
  it("should find the shortest path in a binary matrix", () => {
    const grid1 = [
      [0, 1],
      [1, 1],
    ];
    expect(shortestPathBinaryMatrix(grid1)).toBe(-1);

    const grid2 = [
      [0, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
    ];
    expect(shortestPathBinaryMatrix(grid2)).toBe(4);

    const grid3 = [
      [0, 0, 0],
      [1, 1, 0],
      [1, 1, 1],
    ];
    expect(shortestPathBinaryMatrix(grid3)).toBe(-1);

    const grid4 = [
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 0, 1],
      [0, 0, 0, 0, 0],
    ];
    expect(shortestPathBinaryMatrix(grid4)).toBe(8);
  });

  it("should handle a 1x1 matrix", () => {
    const grid4 = [[0]];
    expect(shortestPathBinaryMatrix(grid4)).toBe(1);
  });

  it("should handle a 2x2 matrix", () => {
    const grid5 = [
      [0, 0],
      [1, 0],
    ];
    expect(shortestPathBinaryMatrix(grid5)).toBe(2);

    const grid6 = [
      [0, 1],
      [1, 0],
    ];
    expect(shortestPathBinaryMatrix(grid6)).toBe(2);
  });

  it("should handle a matrix with a single obstacle", () => {
    const grid7 = [[0, 1]];
    expect(shortestPathBinaryMatrix(grid7)).toBe(-1);

    const grid8 = [
      [0, 1],
      [0, 0],
    ];
    expect(shortestPathBinaryMatrix(grid8)).toBe(2);
  });

  it("should handle a matrix with all obstacles", () => {
    const grid9 = [
      [1, 1],
      [1, 1],
    ];
    expect(shortestPathBinaryMatrix(grid9)).toBe(-1);
  });

  it("should handle a matrix that isn't square", () => {
    const grid10 = [
      [0, 0, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 0, 0],
    ];
    expect(shortestPathBinaryMatrix(grid10)).toBe(5);
  });

  it("should handle a matrix that isn't square and blocked", () => {
    const grid10 = [
      [0, 0, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [0, 0, 0, 0, 1],
    ];
    expect(shortestPathBinaryMatrix(grid10)).toBe(-1);
  });
});
