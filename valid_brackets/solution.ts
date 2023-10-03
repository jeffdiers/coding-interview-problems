// Problem Statement: Valid Parentheses

// Problem Description:
// Given a string containing just the characters '(', ')', '{', '}', '[', and ']',
// determine if the input string is valid. An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// You need to implement a function isValid that takes a string as input and returns
// true if the string is valid and false otherwise.

// Input:
// A string s containing only characters '(', ')', '{', '}', '[', and ']'.

// Output:
// Return true if the string is valid, and false otherwise.

// Note:
// An empty string is considered valid.
// You can assume that the input string does not contain any other characters.

export const isValid = (input: string): boolean => {
  const validMap: { [key: string]: string } = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const temp = [];

  for (const char of input) {
    // if its open, add to the stack
    if (validMap[char] === undefined) {
      temp.push(char);
    } else if (temp[temp.length - 1] === validMap[char]) {
      // if its closed, look into the stack and if the most recent matches remove from stack
      temp.pop();
    } else {
      return false;
    }
  }

  return true;
};

console.log(isValid("()")); // Should return true
console.log(isValid("()[]{}")); // Should return true
console.log(isValid("(]")); // Should return false
console.log(isValid("([)]")); // Should return false
console.log(isValid("{[]}")); // Should return true
