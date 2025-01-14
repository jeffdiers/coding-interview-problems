// Problem Statement: Reverse Words in a String

// Problem Description:
// Given an input string s, reverse the order of the words.

// A "word" is defined as a sequence of non-space characters.
// The input string does not contain leading or trailing spaces,
// and you may not use any extra spaces between the words.

// Input:
// A string s containing a sequence of non-space characters representing words.

// Output:
// Return a string with the words reversed in order.

// Notes:
// You are not allowed to use any extra spaces between the words.
// The input string does not contain leading or trailing spaces.
// The words in the string are separated by a single space.

export const reverseWords = (s: string) => {
  // Your code here
};

// Example
console.log(reverseWords("the sky is blue")); // Should return "blue is sky the"
console.log(reverseWords("  hello world  ")); // Should return "world hello"
console.log(reverseWords("a good   example")); // Should return "example good a"
