/**
 * Problem: Create a custom hook `useTimeout` to easily use `setTimeout(callback, delay)`.
 *
 * - The timer should reset when the `delay` changes.
 * - The timer should NOT reset if only the `callback` changes.
 * - The hook should clean up the timer when the component unmounts.
 */

export function useTimeout(callback: () => void, delay: number) {
  // Implement your solution here
}
