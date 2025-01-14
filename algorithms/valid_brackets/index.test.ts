import { isValid } from "./index"; // Replace with the correct path to your solution file

describe("isValid", () => {
  it("should return true for valid parentheses", () => {
    expect(isValid("()")).toBe(true);
    expect(isValid("()[]{}")).toBe(true);
    expect(isValid("{[]}")).toBe(true);
  });

  it("should return false for invalid parentheses", () => {
    expect(isValid("(]")).toBe(false);
    expect(isValid("([)]")).toBe(false);
    expect(isValid("({[}])")).toBe(false);
  });

  it("should handle empty input", () => {
    expect(isValid("")).toBe(true);
  });

  it("should handle non-parentheses characters", () => {
    expect(isValid("abc")).toBe(true);
  });
});
