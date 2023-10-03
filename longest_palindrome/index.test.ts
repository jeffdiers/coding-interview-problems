import { longestPalindrome } from "./index"; // Replace with the correct path to your solution file

describe("longestPalindrome", () => {
  it("should find the longest palindromic substring", () => {
    expect(["bab", "aba"]).toContain(longestPalindrome("babad"));
    expect(longestPalindrome("cbbd")).toBe("bb");
    expect(longestPalindrome("a")).toBe("a");
    expect(longestPalindrome("racecar")).toBe("racecar");
    expect(longestPalindrome("abcde")).toBe("a");
  });

  it("should handle empty input", () => {
    expect(longestPalindrome("")).toBe("");
  });
});
