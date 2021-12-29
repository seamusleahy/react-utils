import { useRef } from "react";

/**
 * Check if the first run of functional component.
 *
 * @example
 * ```typescript
 * const Example: React.FC = () => {
 *   const isInitRun = useIsInit();
 *
 *   if (isInitRun) {
 *     // Code only runs on the first time
 *   }
 * };
 * ```
 *
 * @returns `true` on the first run of the component, otherwise, false
 */
export function useIsInit(): boolean {
  const ref = useRef(true);

  if (ref.current) {
    ref.current = false;
    return true;
  }

  return false;
}
