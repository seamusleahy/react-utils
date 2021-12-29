import { useWhenInit } from "./useWhenInit";

/**
 *
 * @param callback
 */
export function useWhenInitAsync(callback: () => void): void {
  useWhenInit(() => setTimeout(callback, 0));
}
