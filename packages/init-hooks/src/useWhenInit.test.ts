import { renderHook } from "@testing-library/react-hooks/native";
import { useWhenInit } from "./useWhenInit";

describe("useWhenInit", () => {
  it("runs the callback the first time", () => {
    const cb = jest.fn();
    renderHook(() => useWhenInit(cb));
    expect(cb.mock.calls.length).toBe(1);
  });

  it("does not run the callback after the first time", () => {
    const cb = jest.fn();
    const { rerender } = renderHook(() => useWhenInit(cb));
    rerender();
    expect(cb.mock.calls.length).toBe(1);
  });
});
