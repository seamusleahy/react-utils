# @seamusleahy/pointer-down-then-up: onClick for pointer events
A replacement for `onClick` when you want to use [pointer events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events).

## Installation
This module is available via [NPM](https://www.npmjs.org).

```bash
# if you're using npm
npm install @seamusleahy/pointer-down-then-up
# if you're using yarn
yarn add @seamusleahy/pointer-down-then-up
```

This module does not bundle [React](https://reactjs.org/) but requires your project to include React 16.8 or higher.

```bash
# if you're using npm
npm install react
# if you're using yarn
yarn add react
```

This module provides [TypeScript](https://www.typescriptlang.org/) type definitions to work with your TypeScript project.

## How-to use
Wrap the component to add the `pointerUpThenDown` event to with with `<PointerUpThenDown>`.

```typescript
import { PointerDownThenUp } from "@seamusleahy/pointer-down-then-up";

export const Button: FC<{action: () => void}> = ({ action }) => {
  return (
    <PointerDownThenUp onPointerDownThenUp={action}>
      <button>Click me</button>
    </PointerDownThenUp>
  );
};
```

