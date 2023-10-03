// Problem Statement: Longest Substring Without Repeating Characters

// Problem Description:
// Given a string, find the length of the longest substring without
// repeating characters.

// For example, given the input string "abcabcbb", the longest
// substring without repeating characters is "abc", and its length is 3.

// Input:
// A string s consisting of English letters, digits, symbols, or spaces.

// Output:
// An integer representing the length of the longest substring without repeating characters.

// Note:
// Your solution should have a time complexity of O(n), where n is the length of the input string.

export const lengthOfLongestSubstring = (s: string): number => {
  let map: { [key: string]: number } = {};
  let longest = 0;
  let curr = 0;

  for (let i = 0; i < s.length; i++) {
    if (map.hasOwnProperty(s[i])) {
      map = {};
      curr = 0;
    }
    map[s[i]] = 0;
    curr += 1;
    longest = Math.max(curr, longest);
  }
  return longest;
};

// Example
console.log(lengthOfLongestSubstring("abcabcbb")); // Should return 3
console.log(lengthOfLongestSubstring("bbbbb")); // Should return 1
console.log(lengthOfLongestSubstring("pwwkew")); // Should return 3
