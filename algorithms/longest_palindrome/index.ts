// Problem Statement: Longest Palindromic Substring

// Problem Description:
// Given a string s, find the longest palindromic substring in s.
// A palindrome is a word, phrase, number, or other sequences of
// characters that reads the same forward and backward. The
// substring should be case-sensitive, meaning "racecar" is a
// valid palindrome, but "Racecar" is not.

// For example, given the string "babad", the longest palindromic
// substring is "bab" or "aba". Another example is "cbbd", where
// the longest palindromic substring is "bb".

// Input:
// A string s containing only printable ASCII characters.

// Output:
// A string representing the longest palindromic substring found in s.

// Note:
// If there are multiple valid answers, return any of them.
// This problem involves finding the longest palindromic substring
// within the given string s. You'll need to determine the approach
// and algorithm to efficiently find and return this substring.

export const longestPalindrome = (s: string) => {
  // Your code here
};

// Example
console.log(longestPalindrome("babad")); // Should return "bab" or "aba"
console.log(longestPalindrome("cbbbbbbbd")); // Should return "bb"
console.log(longestPalindrome("racecar")); // Should return "racecar"
