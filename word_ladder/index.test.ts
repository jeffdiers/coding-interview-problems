import { ladderLength } from "./index";

describe("Word Ladder", () => {
  it("Example Test Case 1", () => {
    const beginWord = "hit";
    const endWord = "cog";
    const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
    const length = ladderLength(beginWord, endWord, wordList);
    expect(length).toBe(5);
  });

  it("Example Test Case 2", () => {
    const beginWord = "hot";
    const endWord = "dog";
    const wordList = ["hot", "dog"];
    const length = ladderLength(beginWord, endWord, wordList);
    expect(length).toBe(-1);
  });

  it("Example Test Case 3", () => {
    const beginWord = "a";
    const endWord = "c";
    const wordList = ["a", "b", "c"];
    const length = ladderLength(beginWord, endWord, wordList);
    expect(length).toBe(2);
  });

  it("Example Test Case 4", () => {
    const beginWord = "red";
    const endWord = "tax";
    const wordList = ["ted", "tex", "red", "tax", "tad", "den", "rex", "pee"];
    const length = ladderLength(beginWord, endWord, wordList);
    expect(length).toBe(4);
  });
});
