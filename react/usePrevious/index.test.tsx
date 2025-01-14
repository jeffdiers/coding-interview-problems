import { renderHook } from "@testing-library/react-hooks";
import { usePrevious } from "./index";

describe("usePrevious", () => {
  test("returns undefined on the first render", () => {
    const { result } = renderHook(() => usePrevious(42));

    expect(result.current).toBeUndefined();
  });

  test("tracks the previous value after updates", () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: 42 },
    });

    // First render, previous value should be undefined
    expect(result.current).toBeUndefined();

    // Update the value
    rerender({ value: 100 });

    // Now, previous value should be 42
    expect(result.current).toBe(42);

    // Update the value again
    rerender({ value: 200 });

    // Now, previous value should be 100
    expect(result.current).toBe(100);
  });

  test("handles changes to different data types", () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: "hello" as any },
    });

    // First render, previous value should be undefined
    expect(result.current).toBeUndefined();

    // Update the value to a number
    rerender({ value: 123 });

    // Previous value should now be 'hello'
    expect(result.current).toBe("hello");

    // Update the value to an object
    rerender({ value: { key: "value" } });

    // Previous value should now be 123
    expect(result.current).toBe(123);
  });
});
