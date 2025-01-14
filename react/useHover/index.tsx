/**
 * Problem: It is common to see conditional rendering based on hover state of some element.
 * We can achive it by CSS pseduo class :hover, but for more complex cases it might be better to have state controlled by script.
 * Now you are asked to create a useHover() hook.
 *
 * - event listeners should be attached
 * - event listeners should be detached when ref.current changes
 * - should work on deferred ref
 */

import { Ref } from "react";

export function useHover<T extends HTMLElement>(): [Ref<T>, boolean] {
  // Implement your solution here
  return [() => {}, false];
}
