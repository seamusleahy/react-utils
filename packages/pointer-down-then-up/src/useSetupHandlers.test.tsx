import { PointerEvent as ReactPointerEvent } from "react";
import { renderHook } from "@testing-library/react-hooks";
import { useSetupHandlers } from "./useSetupHandlers";

class MockPointerEvent {
  constructor(
    public type: string,
    public pointerId = 0,
    public isPropagationStopped = () => false
  ) {}
}

describe("useSetupHandlers", () => {
  it("will call the downThenUpHandler when the up event happens after the down event on the same element", () => {
    const downThenUpHandler = jest.fn();

    const { result } = renderHook(() =>
      useSetupHandlers(downThenUpHandler, {})
    );
    const { down, up } = result.current;
    const downEvent = new MockPointerEvent(
      "pointerdown"
    ) as unknown as ReactPointerEvent<Element>;
    const upEvent = new MockPointerEvent(
      "pointerup"
    ) as unknown as ReactPointerEvent<Element>;
    down!(downEvent);
    up!(upEvent);
    expect(downThenUpHandler).toHaveBeenCalledWith(upEvent);
  });

  it("will not call the downThenUpHandler after pointerleaves", () => {
    const downThenUpHandler = jest.fn();

    const { result } = renderHook(() =>
      useSetupHandlers(downThenUpHandler, {})
    );
    const { down, leave, up } = result.current;
    const downEvent = new MockPointerEvent(
      "pointerdown"
    ) as unknown as ReactPointerEvent<Element>;
    const leaveEvent = new MockPointerEvent(
      "pointerleave"
    ) as unknown as ReactPointerEvent<Element>;
    const upEvent = new MockPointerEvent(
      "pointerup"
    ) as unknown as ReactPointerEvent<Element>;
    down!(downEvent);
    leave!(leaveEvent);
    up!(upEvent);
    expect(downThenUpHandler).not.toHaveBeenCalledWith(upEvent);
  });

  it("will not call the downThenUpHandler without a pointerdown", () => {
    const downThenUpHandler = jest.fn();

    const { result } = renderHook(() =>
      useSetupHandlers(downThenUpHandler, {})
    );
    const { up } = result.current;
    const upEvent = new MockPointerEvent(
      "pointerup"
    ) as unknown as ReactPointerEvent<Element>;
    up!(upEvent);
    expect(downThenUpHandler).not.toHaveBeenCalledWith(upEvent);
  });

  it("will call the original prop pointer events", () => {
    const downThenUpHandler = jest.fn();
    const originalHandlers = {
      up: jest.fn(),
      leave: jest.fn(),
      down: jest.fn(),
    };

    const { result } = renderHook(() =>
      useSetupHandlers(downThenUpHandler, originalHandlers)
    );
    const { down, leave, up } = result.current;
    const downEvent = new MockPointerEvent(
      "pointerdown"
    ) as unknown as ReactPointerEvent<Element>;
    const leaveEvent = new MockPointerEvent(
      "pointerleave"
    ) as unknown as ReactPointerEvent<Element>;
    const upEvent = new MockPointerEvent(
      "pointerup"
    ) as unknown as ReactPointerEvent<Element>;
    down!(downEvent);
    expect(originalHandlers.down).toHaveBeenCalledWith(downEvent);
    expect(originalHandlers.up).not.toHaveBeenCalledWith(downEvent);

    up!(upEvent);
    expect(originalHandlers.up).toHaveBeenCalledWith(upEvent);

    leave!(leaveEvent);
    expect(originalHandlers.leave).toHaveBeenCalledWith(leaveEvent);
  });

  it("will not call downThenUpHandler when the original down handler stops propagation", () => {
    const downThenUpHandler = jest.fn();
    const originalHandlers = {
      up: jest.fn(),
      down: jest.fn(),
    };

    const { result } = renderHook(() =>
      useSetupHandlers(downThenUpHandler, originalHandlers)
    );
    const { down, up } = result.current;
    const downEvent = new MockPointerEvent(
      "pointerdown",
      0,
      () => true
    ) as unknown as ReactPointerEvent<Element>;
    const upEvent = new MockPointerEvent(
      "pointerup"
    ) as unknown as ReactPointerEvent<Element>;
    down!(downEvent);
    up!(upEvent);
    expect(downThenUpHandler).not.toHaveBeenCalledWith();
  });

  it("will not call downThenUpHandler when the original up handler stops propagation", () => {
    const downThenUpHandler = jest.fn();
    const originalHandlers = {
      up: jest.fn(),
      down: jest.fn(),
    };

    const { result } = renderHook(() =>
      useSetupHandlers(downThenUpHandler, originalHandlers)
    );
    const { down, up } = result.current;
    const downEvent = new MockPointerEvent(
      "pointerdown"
    ) as unknown as ReactPointerEvent<Element>;
    const upEvent = new MockPointerEvent(
      "pointerup",
      0,
      () => true
    ) as unknown as ReactPointerEvent<Element>;
    down!(downEvent);
    up!(upEvent);
    expect(downThenUpHandler).not.toHaveBeenCalledWith();
  });
});
