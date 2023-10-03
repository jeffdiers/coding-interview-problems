// Write a function firstNonRepeatedCharacter that takes a string as input
// and returns the first non-repeated character in the string.
// If all characters are repeated, return null.

// For example, given the input "programming", the function should return
// "p" because 'p' is the first character that does not repeat elsewhere
// in the string.

// Constraints
// The input string will consist of only lowercase alphabetical characters.
// You can assume the string will not be empty.

export const firstNonRepeatedCharacter = (string: string) => {
  // Your code here
};

// Example
console.log(firstNonRepeatedCharacter("programming")); // Output: "p"
console.log(firstNonRepeatedCharacter("aabbcc")); // Output: null
console.log(firstNonRepeatedCharacter("hello")); // Output: "h"
