import { firstNonRepeatedCharacter } from "./index"; // Replace with the actual file path and name

describe("firstNonRepeatedCharacter function", () => {
  it("should return the first non-repeated character", () => {
    expect(firstNonRepeatedCharacter("programming")).toBe("p");
    expect(firstNonRepeatedCharacter("aabbcc")).toBeNull();
    expect(firstNonRepeatedCharacter("hello")).toBe("h");
  });

  it("should handle edge cases", () => {
    // Test with an empty string
    expect(firstNonRepeatedCharacter("")).toBeNull();

    // Test with a string containing a single character
    expect(firstNonRepeatedCharacter("a")).toBe("a");

    // Test with a string containing only repeated characters
    expect(firstNonRepeatedCharacter("aaaa")).toBeNull();
  });

  it("should handle large strings efficiently", () => {
    const largeString = "abcdefghijklmnopqrstuvwxy".repeat(10000) + "z";
    expect(firstNonRepeatedCharacter(largeString)).toBe("z");
  });
});
