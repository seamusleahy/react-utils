import { useState } from "react";

/**
 * Create a value that will be the same across all the render calls.
 *
 * @example
 * ```typescript
 * const Example: FC = () => {
 *   // `cache` will be the same `Set` for the life of the component
 *   const cache = useConstValue(() => new Set<string, number>());
 *   // ...
 * }
 * ```
 *
 * @param factory Function to create the initial value
 */
export function useConstValue<T>(factory: () => T): T {
  const [value] = useState<T>(factory);
  return value;
}
