import { useWhenInit } from "./useWhenInit";

/**
 * Run a callback function at the next event loop cycle after the first run of a functional component.
 *
 * If you need it to run immediately, use [`useWhenInit`](./useWhenInit.ts) instead.
 *
 * @example
 * ```typescript
 * const Example: React.FC = () => {
 *   useWhenInitAsync(() => {
 *     // Code only runs at the next event loop after the first time
 *   });
 * };
 * ```
 *
 * @param callback - Function to run on the first run
 */
export function useWhenInitAsync(callback: () => void): void {
  useWhenInit(() => setTimeout(callback, 0));
}
