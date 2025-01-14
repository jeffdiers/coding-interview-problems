import { reverseWords } from "./index"; // Replace with the correct path to your solution file

describe("reverseWords", () => {
  it("should reverse the order of words in a string", () => {
    expect(reverseWords("the sky is blue")).toBe("blue is sky the");
    expect(reverseWords("  hello world  ")).toBe("world hello");
    expect(reverseWords("a good   example")).toBe("example good a");
  });

  it("should handle an empty string", () => {
    expect(reverseWords("")).toBe("");
  });

  it("should handle a string with a single word", () => {
    expect(reverseWords("word")).toBe("word");
  });

  it("should handle a string with multiple spaces between words", () => {
    expect(reverseWords("   one   two   three   ")).toBe("three two one");
  });

  it("should handle a string with leading and trailing spaces", () => {
    expect(reverseWords("  leading and trailing spaces  ")).toBe(
      "spaces trailing and leading"
    );
  });
});
