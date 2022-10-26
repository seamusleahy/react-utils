@seamusleahy/null-component / [Exports](modules.md)

# @seamusleahy/null-component: Know why null was returned
A component to use in lieu of returning `null` from a React component.
By using `NullComponent`, you'll get details in React Dev tools as to why a `null` 
value was returned (only in development mode).

![Example of React Dev Tools](./screenshot-of-null-component.png)

## Installation
This module is available via [NPM](https://www.npmjs.org).

```bash
# if you're using npm
npm install @seamusleahy/null-component
# if you're using yarn
yarn add @seamusleahy/null-component
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
Replace where you return `null` from your component with `<NullComponent />`

```diff
+ import { NullComponent } from "@seamusleahy/null-component";

  export UserDetails: FC<{show: boolean}> = ({show = false}) => {
    if (!show) {
-     return null;
+     return <NullComponent reason="UserDetails' prop show=false" />;
    }
  }
```
## Rational
When dealing with a large existing React project, 
sometimes the easiest way to find the code to work on is through
React Dev Tools. But when `null` is returned, it doesn't show up
in the Dev Tools. This makes it shows up with a comment as to why
it doesn't show.
