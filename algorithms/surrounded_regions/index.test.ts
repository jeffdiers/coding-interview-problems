import { solve } from "./index"; // Replace with the correct path to your solution file

describe("solve", () => {
  it("should capture surrounded regions", () => {
    const board1 = [
      ["X", "X", "X", "X"],
      ["X", "O", "O", "X"],
      ["X", "X", "O", "X"],
      ["X", "O", "X", "X"],
    ];

    const expected1 = [
      ["X", "X", "X", "X"],
      ["X", "X", "X", "X"],
      ["X", "X", "X", "X"],
      ["X", "O", "X", "X"],
    ];

    solve(board1);
    expect(board1).toEqual(expected1);

    const board2 = [
      ["X", "X", "X", "X"],
      ["X", "X", "X", "X"],
      ["X", "X", "X", "X"],
      ["X", "X", "X", "X"],
    ];

    const expected2 = [
      ["X", "X", "X", "X"],
      ["X", "X", "X", "X"],
      ["X", "X", "X", "X"],
      ["X", "X", "X", "X"],
    ];

    solve(board2);
    expect(board2).toEqual(expected2);

    const board3 = [
      ["X", "X", "X", "X"],
      ["X", "O", "O", "X"],
      ["X", "O", "O", "X"],
      ["X", "X", "X", "X"],
    ];

    const expected3 = [
      ["X", "X", "X", "X"],
      ["X", "X", "X", "X"],
      ["X", "X", "X", "X"],
      ["X", "X", "X", "X"],
    ];

    solve(board3);
    expect(board3).toEqual(expected3);
  });

  it("should handle an empty board", () => {
    const emptyBoard: string[][] = [];
    solve(emptyBoard);
    expect(emptyBoard).toEqual([]);
  });

  it('should handle a board with no "O" cells', () => {
    const board4 = [
      ["X", "X", "X"],
      ["X", "X", "X"],
    ];

    const expected4 = [
      ["X", "X", "X"],
      ["X", "X", "X"],
    ];

    solve(board4);
    expect(board4).toEqual(expected4);
  });

  it("should handle a large board with surrounded regions", () => {
    const board7 = [
      ["X", "X", "X", "X", "X", "X", "X"],
      ["X", "O", "O", "X", "O", "X", "X"],
      ["X", "O", "X", "O", "O", "O", "X"],
      ["X", "X", "X", "X", "X", "O", "X"],
      ["X", "X", "X", "X", "X", "O", "X"],
    ];

    const expected7 = [
      ["X", "X", "X", "X", "X", "X", "X"],
      ["X", "X", "X", "X", "O", "X", "X"],
      ["X", "X", "X", "O", "O", "O", "X"],
      ["X", "X", "X", "X", "X", "O", "X"],
      ["X", "X", "X", "X", "X", "O", "X"],
    ];

    solve(board7);
    expect(board7).toEqual(expected7);
  });

  it("should handle a board with no surrounded regions", () => {
    const board8 = [
      ["X", "X", "X", "X", "X", "X", "X"],
      ["X", "X", "X", "O", "X", "X", "X"],
      ["X", "X", "X", "X", "X", "X", "X"],
      ["X", "X", "X", "X", "X", "X", "X"],
      ["X", "X", "X", "X", "X", "X", "X"],
    ];

    const expected8 = [
      ["X", "X", "X", "X", "X", "X", "X"],
      ["X", "X", "X", "X", "X", "X", "X"],
      ["X", "X", "X", "X", "X", "X", "X"],
      ["X", "X", "X", "X", "X", "X", "X"],
      ["X", "X", "X", "X", "X", "X", "X"],
    ];

    solve(board8);
    expect(board8).toEqual(expected8);
  });
});
