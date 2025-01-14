/**
 * Problem: Create a custom hook that returns the previous value.
 *
 * - The initial previous value should be undefined.
 * - It should keep track of the previous value.
 */

import { useRef } from "react";

// We use a generic type so the hook so we can re-use this hook using different types
export function usePrevious<T>(value: T): T | undefined {
  // Storing the value in a useRef allows us to change it without causing a re-render
  const ref = useRef<T | undefined>(undefined);
  const prev = ref.current;
  ref.current = value;
  return prev;
}
