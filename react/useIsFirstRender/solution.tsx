/**
 * Problem: Create a custom hook to tell if it the first render.
 *
 * - Return true if it is the first render, false if not.
 */

import { useRef } from "react";

export function useIsFirstRender() {
  // We can use useState or useRef to store and update data
  // but we want to update the data without triggereing an update so lets use useRef()
  const isFirstRender = useRef(true);

  // We can check if the hook has been rendered using useEffect or useLayoutEffect
  // to check if first render as early as possible, before the browser paints, we can use useLayoutEffect
  // useLayoutEffect(() => {
  //   isFirstRender.current = false;
  // }, []);

  // return isFirstRender.current;

  // We can also update the ref object during render
  // React doesn't reccommend updating a ref obj during render
  // but for this case it's okay because once it's set to false it never changes.
  if (isFirstRender.current) {
    isFirstRender.current = false;
    return true;
  }
  return false;
}
