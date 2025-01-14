import { renderHook } from "@testing-library/react-hooks";
import { useTimeout } from "./index";

describe("useTimeout", () => {
  test("calls the callback after the specified delay", () => {
    jest.useFakeTimers();
    const callback = jest.fn();

    const { rerender } = renderHook(
      ({ delay }) => useTimeout(callback, delay),
      {
        initialProps: { delay: 1000 },
      }
    );

    expect(callback).not.toHaveBeenCalled();

    // Fast-forward time
    jest.advanceTimersByTime(1000);

    expect(callback).toHaveBeenCalledTimes(1);

    jest.useRealTimers();
  });

  test("resets the timer when delay changes", () => {
    jest.useFakeTimers();
    const callback = jest.fn();

    const { rerender } = renderHook(
      ({ delay }) => useTimeout(callback, delay),
      {
        initialProps: { delay: 1000 },
      }
    );

    // Advance halfway through the first delay
    jest.advanceTimersByTime(500);

    // Change the delay
    rerender({ delay: 2000 });

    // Ensure the callback hasn't been called
    expect(callback).not.toHaveBeenCalled();

    // Fast-forward to the new delay
    jest.advanceTimersByTime(2000);

    expect(callback).toHaveBeenCalledTimes(1);

    jest.useRealTimers();
  });

  test("does not reset the timer when callback changes", () => {
    jest.useFakeTimers();
    const callback1 = jest.fn();
    const callback2 = jest.fn();

    const { rerender } = renderHook(
      ({ callback }) => useTimeout(callback, 1000),
      {
        initialProps: { callback: callback1 },
      }
    );

    // Advance halfway through the first delay
    jest.advanceTimersByTime(500);

    // Change the callback
    rerender({ callback: callback2 });

    // Fast-forward to the end of the delay
    jest.advanceTimersByTime(500);

    expect(callback2).toHaveBeenCalledTimes(1);

    jest.useRealTimers();
  });

  test("cleans up the timer on unmount", () => {
    jest.useFakeTimers();
    const callback = jest.fn();

    const { unmount } = renderHook(() => useTimeout(callback, 1000));

    unmount();

    // Fast-forward time
    jest.advanceTimersByTime(1000);

    expect(callback).not.toHaveBeenCalled();

    jest.useRealTimers();
  });
});
