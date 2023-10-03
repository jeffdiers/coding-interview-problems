import { lengthOfLongestSubstring } from "./index"; // Replace with the correct path to your solution file

describe("lengthOfLongestSubstring", () => {
  it("should return the length of the longest substring without repeating characters", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });

  it("should handle an empty string", () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
  });

  it("should handle a string with a single character", () => {
    expect(lengthOfLongestSubstring("a")).toBe(1);
  });

  it("should handle a string with all unique characters", () => {
    expect(lengthOfLongestSubstring("abcdefg")).toBe(7);
  });
});
