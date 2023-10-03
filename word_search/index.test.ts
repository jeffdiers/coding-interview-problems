import { exist } from "./index"; // Replace with the correct path to your solution file

describe("exist", () => {
  it("should find a word in the grid", () => {
    const board1 = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ];
    expect(exist(board1, "ABCCED")).toBe(true);

    const board2 = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ];
    expect(exist(board2, "SEE")).toBe(true);

    const board3 = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ];
    expect(exist(board3, "ABCB")).toBe(false);
  });

  it("should handle an empty grid", () => {
    const emptyBoard: string[][] = [];
    expect(exist(emptyBoard, "WORD")).toBe(false);
  });

  it("should handle a word not in the grid", () => {
    const board4 = [["A", "B", "C"]];
    expect(exist(board4, "XYZ")).toBe(false);
  });

  it("should handle a word with a single character", () => {
    const board5 = [["A"]];
    expect(exist(board5, "A")).toBe(true);
  });
});
