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
  const maskSSN = (ssn: string) => {
    if (maskType === "full-mask") return "*********";
    if (maskType === "partial-mask") return ssn.slice(0, 5) + "****";
    return ssn;
  };

  const checkKey = (key: string) => {
    return ["ssn", "document_ssn", "social_security_number"].includes(key);
  };

  const offByOne = (ssn1: string, ssn2: string) => {
    if (ssn1.length !== ssn2.length) return false;
    let offBy = 0;
    for (let i = 0; i < ssn1.length; i++) {
      if (ssn1[i] !== ssn2[i]) offBy += 1;
      if (offBy > 1) return false;
    }
    return true;
  };

  const seenSSNs: Set<string> = new Set();
  const warnOnMultiple = (ssn: string) => {
    const firstSSN = seenSSNs.values().next().value!;
    if (seenSSNs.size > 0 && !seenSSNs.has(ssn)) {
      if (typeof firstSSN === "string" && !offByOne(firstSSN, ssn)) {
        console.warn(`Warning: Multiple SSNs detected: ${ssn} and ${firstSSN}`);
      }
    }

    if (
      !firstSSN ||
      (typeof firstSSN === "string" && !offByOne(firstSSN, ssn))
    ) {
      seenSSNs.add(ssn);
    }
  };

  const maskObj = (unmaskedObj: Record<string, any>) => {
    const maskedObj: Record<string, any> = {};

    for (const key in unmaskedObj) {
      if (checkKey(key) && typeof unmaskedObj[key] === "string") {
        maskedObj[key] = maskSSN(unmaskedObj[key]);
        warnOnMultiple(unmaskedObj[key]);
      } else if (
        typeof unmaskedObj[key] === "object" &&
        unmaskedObj[key] !== null
      ) {
        maskedObj[key] = maskObj(unmaskedObj[key]);
      } else {
        maskedObj[key] = unmaskedObj[key];
      }
    }

    return maskedObj;
  };

  const processedObj = maskObj(obj);
  checkSharedSSNs && checkSharedSSNs(seenSSNs);

  return processedObj;
};

// Function for Task 6: process multiple people and check for shared SSNs
export const processMultiplePeople = (
  people: Array<Record<string, any>>,
  maskType: MaskType
) => {
  // Your code here
  const sharedSSNs = new Map();
  const checkSharedSSNs = (ssns: Set<string>) => {
    for (const ssn of ssns) {
      if (sharedSSNs.has(ssn)) {
        sharedSSNs.set(ssn, sharedSSNs.get(ssn)! + 1);
      } else {
        sharedSSNs.set(ssn, 0);
      }
    }
  };

  const maskedPeople = [];
  for (let i = 0; i < people.length; i++) {
    maskedPeople.push(maskSensitiveData(people[i], maskType, checkSharedSSNs));
  }

  for (const [ssn, count] of sharedSSNs) {
    if (count > 0) {
      console.warn(`Warning: Shared SSN detected for ${ssn}`);
    }
  }

  return maskedPeople;
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
