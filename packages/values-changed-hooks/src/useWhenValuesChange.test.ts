import { renderHook } from "@testing-library/react-hooks/native";
import { useWhenValuesChange } from "./useWhenValuesChange";

describe("useWhenValuesChange", () => {
  it("runs the callback on the first run of the component", () => {
    const spy = jest.fn();
    renderHook(() => useWhenValuesChange(spy, [4, "g"], true));
    expect(spy).toHaveBeenCalled();
  });

  it("does not run the callback on the first run of the component", () => {
    const spy = jest.fn();
    renderHook(() => useWhenValuesChange(spy, [4, "g"], false));
    expect(spy).not.toHaveBeenCalled();
  });

  it("runs the callback when the deps changes on subsequent runs", () => {
    const spy = jest.fn();
    const { rerender } = renderHook(
      ({ deps }) => useWhenValuesChange(spy, deps, false),
      {
        initialProps: { deps: [4, "g"] },
      }
    );
    expect(spy).not.toHaveBeenCalled();
    rerender({ deps: [5, "g"] });
    expect(spy).toHaveBeenCalled();
  });

  it("doesn not run the callback when deps do not changes on subsequent runs", () => {
    const spy = jest.fn();
    const { rerender } = renderHook(
      ({ deps }) => useWhenValuesChange(spy, deps, false),
      {
        initialProps: { deps: [4, "g"] },
      }
    );
    expect(spy).not.toHaveBeenCalled();
    rerender({ deps: [4, "g"] });
    expect(spy).not.toHaveBeenCalled();
  });
});
