import { renderHook } from "@testing-library/react-hooks/native";
import { useWhenInitAsync } from "./useWhenInitAsync";

jest.useFakeTimers();

describe("useWhenInitAsync", () => {
  it("does not run the callback during the initial rendering", () => {
    const cb = jest.fn();
    renderHook(() => useWhenInitAsync(cb));
    expect(cb.mock.calls.length).toBe(0);
  });

  it("run the callback after the initial rendering", () => {
    const cb = jest.fn();
    renderHook(() => useWhenInitAsync(cb));
    jest.runAllTimers();
    expect(cb.mock.calls.length).toBe(1);
  });

  it("does not run the callback after subsequent renderings", () => {
    const cb = jest.fn();
    const { rerender } = renderHook(() => useWhenInitAsync(cb));
    jest.runAllTimers();
    rerender();
    jest.runAllTimers();
    expect(cb.mock.calls.length).toBe(1);
  });
});
