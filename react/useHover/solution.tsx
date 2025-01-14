/**
 * Problem: It is common to see conditional rendering based on hover state of some element.
 * We can achive it by CSS pseduo class :hover, but for more complex cases it might be better to have state controlled by script.
 * Now you are asked to create a useHover() hook.
 *
 * - event listeners should be attached
 * - event listeners should be detached when ref.current changes
 * - should work on deferred ref
 */

import { Ref, useState, useRef, useCallback } from "react";

export function useHover<T extends HTMLElement>(): [Ref<T>, boolean] {
  const [isHover, setIsHover] = useState(false);
  const currentRef = useRef<T | null>(null);

  const onMouseEnter = useCallback(() => setIsHover(true), []);
  const onMouseLeave = useCallback(() => setIsHover(false), []);

  const detach = useCallback(() => {
    currentRef.current?.removeEventListener("mouseenter", onMouseEnter);
    currentRef.current?.removeEventListener("mouseleave", onMouseLeave);
    currentRef.current = null;
  }, []);

  const attach = useCallback(
    (element: T) => {
      detach();
      currentRef.current = element;
      currentRef.current.addEventListener("mouseenter", onMouseEnter);
      currentRef.current.addEventListener("mouseleave", onMouseLeave);
    },
    [detach]
  );

  // We can use a callback ref to attach and detach event listeners
  // the ref callback will be called with the element when it's mounted
  // and with null when it's unmounted
  const ref = (element: T) => {
    if (element) {
      attach(element);
    } else {
      detach();
    }
  };

  return [ref, isHover];
}
