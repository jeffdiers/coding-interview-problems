// Problem Statement:

// Implement a function `maskSensitiveData` that takes an object and a mask type
// ('full-mask', 'partial-mask', or 'no-mask') and returns a new object with
// any SSN values masked according to the provided mask type. This function must
// address six tasks:

// Task 1: Masking SSNs. Mask the SSN based on the mask type:
//   - 'full-mask': Mask all digits as '*'
//   - 'partial-mask': Mask only the last four digits as '*'
//   - 'no-mask': Keep the SSN unchanged

// Task 2: Other SSN keys. SSNs may appear under any of these keys:
//   - 'ssn', 'document_ssn', or 'social_security_number'

// Task 3: Nested object. SSNs may appear at any depth within the object and
// should be masked accordingly, even if nested.

// Task 4: Warn on different SSNs. If multiple different SSNs are detected for
// the same individual, log a warning indicating potential inconsistency.

// Task 5: Allow mistyped SSNs. If mismatched SSNs are found but differ by only
// one character, do not log an error.

// Task 6: Warn on shared SSNs. If processing multiple people, log a warning
// if the same SSN is used for multiple individuals.

// Constraints:
// - The input object structure can be deeply nested.
// - All input fields will contain alphanumeric characters only.

// Your task is to implement the `maskSensitiveData` function in TypeScript
// to satisfy all six tasks.

type MaskType = "full-mask" | "partial-mask" | "no-mask";

export const maskSensitiveData = (
  obj: Record<string, any>,
  maskType: MaskType,
  checkSharedSSNs?: Function
): Record<string, any> => {
  // Your code here
  return {};
};

// Function for Task 6: process multiple people and check for shared SSNs
export const processMultiplePeople = (
  people: Array<Record<string, any>>,
  maskType: MaskType
) => {
  // Your code here
};

// Example usage:
const exampleData = {
  name_first: "Jane",
  name_last: "Doe",
  ssn: "123456780",
  data: {
    social_security_number: "123456789",
    formatted: {
      name_first: "Jane",
      document_ssn: "123456789",
    },
  },
};
console.log(maskSensitiveData(exampleData, "partial-mask"));
// Expected output:
// {
//   name_first: 'Jane',
//   name_last: 'Doe',
//   ssn: '12345****',
//   data: {
//     social_security_number: '12345****',
//     formatted: {
//       name_first: 'Jane',
//       document_ssn: '12345****'
//     }
//   }
// }

const people = [
  { name_first: "Jane", ssn: "123456789" },
  { name_first: "John", ssn: "123456789" },
  {
    name_first: "Jim",
    social_security_number: "123456789",
    nested: { ssn: "123456789" },
  },
];
console.log(processMultiplePeople(people, "no-mask"));
// Expected output:
// Warning: Shared SSN detected for 123456789
// [
//   {
//     name_first: "Jane",
//     ssn: "123456789",
//   }, {
//     name_first: "John",
//     ssn: "123456789",
//   }, {
//     name_first: "Jim",
//     social_security_number: "123456789",
//     nested: {
//       ssn: "123456789",
//     },
//   }
// ]
