import { useIsInit } from "./useIsInit";

/**
 * Run a callback function on the first run of a functional component.
 *
 * The callback function will run immediately unlike `useEffect`.
 * If you do not want it to immediately run, use [`useWhenInitAsync`](./useWhenInitAsync.ts) instead.
 *
 * @example
 * ```typescript
 * const Example: React.FC = () => {
 *   useWhenInit(() => {
 *     // Code only runs on the first time
 *   });
 * };
 * ```
 *
 * @param callback - Function to run on the first run
 */
export function useWhenInit(callback: () => void): void {
  const isInit = useIsInit();

  if (isInit) {
    callback();
  }
}
