import { DevNullComponent } from "./DevNullComponent";
import { ProdNullComponent } from "./ProdNullComponent";

declare let process: {
  env: {
    NODE_ENV: string;
  };
};

export const NullComponent = (
  process?.env?.NODE_ENV === "development"
    ? DevNullComponent
    : ProdNullComponent
) as typeof DevNullComponent;
