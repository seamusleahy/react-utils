@seamusleahy/const-value-hook / [Exports](modules.md)

# @seamusleahy/const-value-hook: React const value hook
A light-weight hook to improve readability of your code when you want the same value during the life of a component.

## Examples

[See examples at codesandbox.io](https://codesandbox.io/s/optimistic-dust-pic29n?file=/src/App.tsx)

## Installation
This module is available via [NPM](https://www.npmjs.org).

```bash
# if you're using npm
npm install @seamusleahy/const-value-hook
# if you're using yarn
yarn add @seamusleahy/const-value-hook
```

This module does not bundle [React](https://reactjs.org/) but requires your project to include React 16.8 or higher.

```bash
# if you're using npm
npm install react
# if you're using yarn
yarn add react
```

This module provides [TypeScript](https://www.typescriptlang.org/) type definitions to work with your TypeScript project.

## How-to use [`useConstState()`](./docs/modules.md#useconststate)
Pass in a factory function that returns the initial value. 
The same value will be returned until the component is destroyed.
## Rationale
1. Readability - You don't have to pause while reviewing code to understand the intention
2. Common pattern - Use the same pattern instead of having each engineer using a different pattern for a const value
