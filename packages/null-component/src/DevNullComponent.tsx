import { useDebugValue, useRef } from "react";

export type DevNullComponentProps = {
  reason: string;
  data?: any;
};

export const DevNullComponent = (_props: DevNullComponentProps): null => {
  useNumberOfRenders();
  return null;
};

DevNullComponent.displayName = "NullComponent";

function useNumberOfRenders() {
  const numRef = useRef(0);
  numRef.current += 1;
  useDebugValue(numRef.current);
}
