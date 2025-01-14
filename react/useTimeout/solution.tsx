/**
 * Problem: Create a custom hook `useTimeout` to easily use `setTimeout(callback, delay)`.
 *
 * - The timer should reset when the `delay` changes.
 * - The timer should NOT reset if only the `callback` changes.
 * - The hook should clean up the timer when the component unmounts.
 */

import { useEffect, useLayoutEffect, useRef } from "react";

export function useTimeout(callback: () => void, delay: number) {
  const callbackRef = useRef(callback);
  useLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const timer = setTimeout(() => callbackRef.current(), delay);
    return () => clearTimeout(timer);
  }, [delay]);
}
