import { renderHook } from "@testing-library/react-hooks/native";
import { useConstValue } from "./useConstValue";

describe("useConstValue", () => {
  it("returns the value the first render", () => {
    const value = {};

    const { result } = renderHook(() => useConstValue(() => value));
    expect(result.current).toBe(value);
  });

  it("return the value on subsequent renders", () => {
    const value = {};

    const { result, rerender } = renderHook(() => useConstValue(() => value));
    expect(result.current).toBe(value);
    rerender();
    expect(result.current).toBe(value);
    rerender();
    expect(result.current).toBe(value);
  });
});
