@seamusleahy/values-changes-hooks / [Exports](modules.md)

# @seamusleahy/values-changes-hooks: Know when a value changes
This module provides explicit React hook for running code when a value has changed functional components. This hook replace a familiar pattern of using the `useEffect()` hook to watch when values change.

This differs from `useEffect` in that it runs immediately instead of during a later lifecycle event.

## Examples

```typescript
import { useWhenValuesChange } from '@seamusleahy/values-changes-hooks';

export const Example: FC<{ url: string }> = ({}) => {
  const [content, setContent] = useState<Content | null>(null);

  useWhenValuesChange(async () => {
    const resp = await fetch(url);
    const json = await resp.json();
    setContent(json);
  }, [url]);
  // ...
}
```

## Installation
This module is available via [NPM](https://www.npmjs.org).

```bash
# if you're using npm
npm install @seamusleahy/values-changed-hooks
# if you're using yarn
yarn add @seamusleahy/values-changed-hooks
```

This module does not bundle [React](https://reactjs.org/) but requires your project to include React 16.8 or higher.

```bash
# if you're using npm
npm install react
# if you're using yarn
yarn add react
```

This module provides [TypeScript](https://www.typescriptlang.org/) type definitions to work with your TypeScript project.
## How-to use [`useWhenValuesChange()`](./docs/modules.md)
Pass in a function to execute when the values change along with an array of values to watch.
An optional third argument allows you to disable it from running on the first call of the component.
## Rationale
1. Readability - You don't have to pause while reviewing code to understand the intention
2. Synchronize - Code runs at the time of the hook meaning you don't need to worry about asynchronous
