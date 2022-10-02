import { renderHook } from "@testing-library/react-hooks/native";
import { useHaveValuesChanged } from "./useHaveValuesChanged";

describe("useHaveValuesChanged", () => {
  it("returns `true` on the first run of the component", () => {
    const { result } = renderHook(() => useHaveValuesChanged([4, "g"], true));
    expect(result.current).toBe(true);
  });

  it("returns `false` on the first run of the component", () => {
    const { result } = renderHook(() => useHaveValuesChanged([4, "g"], false));
    expect(result.current).toBe(false);
  });

  it("returns `true` when the deps changes on subsequent runs", () => {
    const { result, rerender } = renderHook(
      ({ deps }) => useHaveValuesChanged(deps, false),
      {
        initialProps: { deps: [4, "g"] },
      }
    );
    rerender({ deps: [5, "g"] });
    expect(result.current).toBe(true);
  });

  it("returns `false` when the deps do not changes on subsequent runs", () => {
    const { result, rerender } = renderHook(
      ({ deps }) => useHaveValuesChanged(deps, false),
      {
        initialProps: { deps: [4, "g"] },
      }
    );
    rerender({ deps: [4, "g"] });
    expect(result.current).toBe(false);
  });
});
