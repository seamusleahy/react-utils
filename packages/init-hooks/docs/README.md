@seamusleahy/init-hooks / [Exports](modules.md)

# @seamusleahy/init-hooks: React initialization hooks
This module provides explicit React hooks for running initialization code in functional components. These hooks replace a familiar pattern of using the `useEffect()` hook to run initialization code.

## Examples

[See examples at codesandbox.io](https://codesandbox.io/s/seamusleahy-init-hooks-examples-575qo?file=/src/App.tsx)

```typescript
import { useWhenInit } from "@seamusleahy/init-hooks";

export const Example: FC = () => {
  const [c, setC] = useState(0);
  let text = "Not initial";
  useWhenInit(() => (text = "Initial"));
  return (
    <div>
      <h1>Example of useWhenInit</h1>
      <p>{text}</p>
      <p>
        <button onClick={() => setC((v) => v + 1)}>Update [{c}]</button>
      </p>
    </div>
  );
}
```

## Installation
This module is available via [NPM](https://www.npmjs.org).

```bash
# if you're using npm
npm install @seamusleahy/init-hooks
# if you're using yarn
yarn add @seamusleahy/init-hooks
```

This module does not bundle [React](https://reactjs.org/) but requires your project to include React 16.8 or higher.

```bash
# if you're using npm
npm install react
# if you're using yarn
yarn add react
```

This module provides [TypeScript](https://www.typescriptlang.org/) type definitions to work with your TypeScript project.

## How-to use [`useWhenInit()`](./docs/modules.md#usewheninit)
The most direct method is to replace `useEffect` with `useWhenInit` in your code.

```diff
+ import { useWhenInit } from '@seamusleahy/init-hooks';
  // ...
- useEffect(() => {
+ useWhenInit(() => {
    // Your init code
- }, []);
+ });
```

### Advance features
* [`useWhenInitAsync()`](./docs/modules.md#usewheninitasync) is similar to `useWhenInit` except it runs the callback on the next event loop cycle.
* [`useIsInit()`](./docs/modules.md#useisinit) returns a boolean and doesn't accept a callback.

## Rationale
With class-based components, you could easily use the constructor to run the initialization code for your component. As we all have transitioned to functional components, the go-to way to run initialization code is with the `useEffect()` hook.

```javascript
useEffect(() => {
  // Your init code
}, []);
```

The purpose of `useEffect()` was not for the general initialization of your component. It was for making changes to the page outside the React context, like directly accessing the DOM. This explains why React executes the callback later after React updates the DOM.

Now that you know the background, the initialization hooks benefit your code by:

1. Reduce the time it takes to read and understand code by using an explicit name
2. Reduce mistakes caused by omitting the dependency array
3. Run initialization code immediately
