import { useDebugValue, useRef } from "react";

export type DevNullComponentProps = {
  reason: string;
  data?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const DevNullComponent = (_props: DevNullComponentProps): null => {
  useNumberOfRenders();
  return null;
};

DevNullComponent.displayName = "NullComponent";

function useNumberOfRenders(): void {
  const numRef = useRef(0);
  numRef.current += 1;
  useDebugValue(numRef.current);
}
