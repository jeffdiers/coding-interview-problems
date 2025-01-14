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

// Helper function to check if two words are one letter different
const isOneLetterDifferent = (word1: string, word2: string): boolean => {
  let diffCount = 0;

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      diffCount++;
      if (diffCount > 1) return false; // More than one letter is different
    }
  }

  return diffCount === 1; // Exactly one letter is different
};

export const ladderLength = (
  begin: string,
  end: string,
  list: string[]
): number => {
  const queue: string[] = [begin];
  const visited: Set<string> = new Set([begin]);
  let result = 1;

  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const curr: string = queue.shift()!;

      if (curr === end) return result;

      for (let j = 0; j < list.length; j++) {
        if (!visited.has(list[j]) && isOneLetterDifferent(list[j], curr)) {
          queue.push(list[j]);
          visited.add(list[j]);
        }
      }
    }

    result += 1;
  }

  return -1;
};

// Example
const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

const length = ladderLength(beginWord, endWord, wordList);
console.log(length); // Output: 5 (hit -> hot -> dot -> dog -> cog)
