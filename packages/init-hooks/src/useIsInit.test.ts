import { renderHook } from "@testing-library/react-hooks/native";
import { useIsInit } from "./useIsInit";

describe("useIsInit", () => {
  it("returns `true` on the first run of the component", () => {
    const { result } = renderHook(() => useIsInit());
    expect(result.current).toBe(true);
  });

  it("returns `false` on runs after the first time", () => {
    const { result, rerender } = renderHook(() => useIsInit());
    rerender();
    expect(result.current).toBe(false);
  });
});
