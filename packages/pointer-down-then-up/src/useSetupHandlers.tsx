import { useCallback, useRef, PointerEvent, PointerEventHandler } from "react";

export type EventHandlers = {
  up?: PointerEventHandler;
  down?: PointerEventHandler;
  leave?: PointerEventHandler;
};

/**
 * Creates the pointer event handlers to achieve the pseudo pointerDownThenUp event.
 *
 * @param downThenUpHandler - The pointer event handler to call when the pointerUp happens after a pointerDown.
 */
export function useSetupHandlers(
  downThenUpHandler: PointerEventHandler | undefined,
  childrenPropHandlers: EventHandlers
): EventHandlers {
  const waitingForUp = useRef<null | Set<number>>(null);
  if (waitingForUp.current === null) {
    waitingForUp.current = new Set();
  }

  const down = useCallback(
    (event: PointerEvent<Element>) => {
      childrenPropHandlers.down?.(event);
      if (!event.isPropagationStopped()) {
        waitingForUp.current!.add(event.pointerId);
      }
    },
    [childrenPropHandlers]
  );

  const leave = useCallback(
    (event: PointerEvent<Element>) => {
      waitingForUp.current!.delete(event.pointerId);
      childrenPropHandlers.leave?.(event);
    },
    [childrenPropHandlers]
  );

  const up = useCallback(
    (event: PointerEvent<Element>) => {
      childrenPropHandlers.up?.(event);
      if (
        !event.isPropagationStopped() &&
        waitingForUp.current!.has(event.pointerId)
      ) {
        downThenUpHandler?.(event);
      }
      waitingForUp.current!.delete(event.pointerId);
    },
    [downThenUpHandler, childrenPropHandlers]
  );

  if (downThenUpHandler) {
    return { down, leave, up };
  } else {
    return childrenPropHandlers;
  }
}
