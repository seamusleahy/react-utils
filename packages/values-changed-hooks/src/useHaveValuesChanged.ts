import { useRef } from "react";

/**
 * Find out when an array of values has changed from the previous rendering.
 * Meant as an alternative to using `useEffect` for watching change of values.
 *
 * @param values - An array of values to be evaluated
 * @param trueOnFirstRun - Set to `true` to get `true` on the first rendering.
 *
 * @example
 *
 * ```typescript
 * const Example: FC<{name: string}> = ({ name }) => {
 *   const nameChanges = useHaveValuesChanged([name], true);
 *   if (nameChanges) {
 *     logger.log('Name change', name);
 *   }
 *   // ...
 * }
 * ```
 */
export function useHaveValuesChanged<T extends ReadonlyArray<any>>(
  values: T,
  trueOnFirstRun: boolean
): boolean {
  const lastValuesRef = useRef<T | null>(null);

  if (lastValuesRef.current === null) {
    lastValuesRef.current = values;
    return trueOnFirstRun;
  }
  const lastValues = lastValuesRef.current;
  lastValuesRef.current = values;

  const len = values.length;
  for (let i = 0; i < len; i += 1) {
    if (values[i] !== lastValues[i]) {
      return true;
    }
  }

  return false;
}
