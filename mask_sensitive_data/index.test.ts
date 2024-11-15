import { maskSensitiveData, processMultiplePeople } from "./index";

describe("maskSensitiveData", () => {
  test("Task 1: Full and partial masking", () => {
    const input = { ssn: "123456789" };
    expect(maskSensitiveData(input, "full-mask").ssn).toBe("*********");
    expect(maskSensitiveData(input, "partial-mask").ssn).toBe("12345****");
    expect(maskSensitiveData(input, "no-mask").ssn).toBe("123456789");
  });

  test("Task 2: Handles multiple SSN keys", () => {
    const input = {
      document_ssn: "123456789",
      social_security_number: "123456789",
    };
    const result = maskSensitiveData(input, "partial-mask");
    expect(result.document_ssn).toBe("12345****");
    expect(result.social_security_number).toBe("12345****");
  });

  test("Task 3: Masks nested SSNs", () => {
    const input = {
      data: {
        social_security_number: "123456789",
        nested: { ssn: "123456789" },
      },
    };
    const result = maskSensitiveData(input, "partial-mask");
    expect(result.data.social_security_number).toBe("12345****");
    expect(result.data.nested.ssn).toBe("12345****");
  });

  test("Task 4: Warns on multiple different SSNs", () => {
    console.warn = jest.fn();
    const input = {
      ssn: "123456789",
      data: { social_security_number: "987654321" },
    };
    maskSensitiveData(input, "partial-mask");
    expect(console.warn).toHaveBeenCalledWith(
      "Warning: Multiple SSNs detected: 987654321 and 123456789"
    );
  });

  test("Task 5: Ignores SSNs off by one character", () => {
    console.warn = jest.fn();
    const input = {
      ssn: "123456789",
      data: { social_security_number: "123456788" },
    };
    maskSensitiveData(input, "partial-mask");
    expect(console.warn).not.toHaveBeenCalled();
  });

  test("Task 6: Warns on shared SSNs across multiple people", () => {
    console.warn = jest.fn();
    const people = [
      { name_first: "Jane", ssn: "123456789" },
      { name_first: "John", ssn: "123456789" },
      {
        name_first: "Jim",
        social_security_number: "123456789",
        nested: { ssn: "123456789" },
      },
    ];
    processMultiplePeople(people, "partial-mask");
    expect(console.warn).toHaveBeenCalledWith(
      "Warning: Shared SSN detected for 123456789"
    );
  });
});
