import { renderHook } from "@testing-library/react-hooks";
import { useIsFirstRender } from "./index";

describe("useIsFirstRender", () => {
  test("returns true on first render and false on subsequent renders", () => {
    const { result, rerender } = renderHook(() => useIsFirstRender());

    // On the first render, it should return true
    expect(result.current).toBe(true);

    // Re-render the hook
    rerender();

    // On subsequent renders, it should return false
    expect(result.current).toBe(false);

    // Re-render again to confirm it stays false
    rerender();
    expect(result.current).toBe(false);
  });
});
