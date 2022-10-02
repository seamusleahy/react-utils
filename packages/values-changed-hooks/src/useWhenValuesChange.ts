import { useHaveValuesChanged } from "./useHaveValuesChanged";

/**
 * Execute code when an array of values has changed from the previous rendering.
 * Meant as an alternative to using `useEffect` for watching change of values.
 *
 * @param fn - Callback to call when the value have changed
 * @param deps - An array of values to be evaluated
 * @param trueOnFirstRun - Set to `true` to get `true` on the first rendering.
 *
 *  * ```typescript
 * const Example: FC<{name: string}> = ({ name }) => {
 *   useWhenValuesChange(() => logger.log('Name change', name), [name] ,true);
 *   // ...
 * }
 * ```
 */
export function useWhenValuesChange<T extends ReadonlyArray<any>>(
  fn: () => void,
  deps: T,
  trueOnFirstRun = true
): void {
  const changed = useHaveValuesChanged(deps, trueOnFirstRun);
  if (changed) {
    fn();
  }
}
