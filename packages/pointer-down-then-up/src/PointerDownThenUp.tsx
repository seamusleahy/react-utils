import React, {
  FC,
  cloneElement,
  ReactElement,
  HTMLAttributes,
  PointerEventHandler,
} from "react";
import { useSetupHandlers } from "./useSetupHandlers";

/**
 * The ReactElement to add the pointerDownThenUp event handler to
 * needs to provide the following props
 */
export type ChildComponentProps = {
  onPointerUp: HTMLAttributes<Element>["onPointerUp"];
  onPointerDown: HTMLAttributes<Element>["onPointerDown"];
  onPointerLeave: HTMLAttributes<Element>["onPointerLeave"];
  onPointerUpCapture: HTMLAttributes<Element>["onPointerUp"];
  onPointerDownCapture: HTMLAttributes<Element>["onPointerDown"];
  onPointerLeaveCapture: HTMLAttributes<Element>["onPointerLeave"];
};

export type PointerUpThenDownProps = {
  /**
   * The ReactElement to add the pointer event handlers to.
   */
  children: ReactElement<ChildComponentProps>;

  /**
   * The pointer event handler to call when the pointerUp happens after a pointerDown.
   * This is replacement for `onClick` when switching to pointer events.
   */
  onPointerDownThenUp?: PointerEventHandler;

  /**
   * The capture version of the pointer event handler to call when the pointerUp happens after a pointerDown.
   * This is replacement for `onClickCapture` when switching to pointer events.
   */
  onPointerDownThenUpCapture?: PointerEventHandler;
};

/**
 * This is a replacement for `onClick` when switching to pointer events.
 * This creates a pseudo event handler from the lower level pointer events
 * and attaches them to the child element.
 *
 * @example
 * ```typescript
 * import { PointerDownThenUp } from "@seamusleahy/pointer-down-then-up";
 *
 * export const Button: FC<{action: () => void}> = ({ action }) => {
 *   return (
 *     <PointerDownThenUp onPointerDownThenUp={action}>
 *       <button>Click me</button>
 *     </PointerDownThenUp>
 *   );
 * }
 * ```
 */
export const PointerUpThenDown: FC<PointerUpThenDownProps> = ({
  children,
  onPointerDownThenUp,
  onPointerDownThenUpCapture,
}) => {
  const handlers = useSetupHandlers(onPointerDownThenUp, {
    up: children.props.onPointerUp,
    leave: children.props.onPointerLeave,
    down: children.props.onPointerDown,
  });

  const captureHandlers = useSetupHandlers(onPointerDownThenUpCapture, {
    up: children.props.onPointerUpCapture,
    leave: children.props.onPointerLeaveCapture,
    down: children.props.onPointerDownCapture,
  });

  return cloneElement(children, {
    onPointerUp: handlers.up,
    onPointerDown: handlers.down,
    onPointerLeave: handlers.leave,
    onPointerUpCapture: captureHandlers.up,
    onPointerDownCapture: captureHandlers.down,
    onPointerLeaveCapture: captureHandlers.leave,
  });
};
