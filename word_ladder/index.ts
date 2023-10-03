// Problem: Word Ladder

// Given two words, beginWord and endWord, and a dictionary of
// words, find the length of the shortest transformation sequence
// from beginWord to endWord, such that:

// Only one letter can be changed at a time.
// Each transformed word must exist in the word list.
// If there is no such transformation sequence, return 0.

// You may assume that both beginWord and endWord are non-empty
// and are not the same.

// This problem involves finding the shortest transformation
// sequence between two words by changing one letter at a time
// while ensuring that each intermediate word exists in a given
// word list.

export const ladderLength = (begin: string, end: string, list: string[]) => {
  // Your code here
};

// Example
const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

const length = ladderLength(beginWord, endWord, wordList);
console.log(length); // Output: 5 (hit -> hot -> dot -> dog -> cog)
