import { useIsInit } from "./useIsInit";

/**
 * Run
 * @param callback
 */
export function useWhenInit(callback: () => void): void {
  const isInit = useIsInit();

  if (isInit) {
    callback();
  }
}
