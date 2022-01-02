[@seamusleahy/init-hooks](README.md) / Exports

# @seamusleahy/init-hooks

## Table of contents

### Functions

- [useIsInit](modules.md#useisinit)
- [useWhenInit](modules.md#usewheninit)
- [useWhenInitAsync](modules.md#usewheninitasync)

## Functions

### useIsInit

▸ **useIsInit**(): `boolean`

Check if the first run of functional component.

**`example`**
```typescript
const Example: React.FC = () => {
  const isInitRun = useIsInit();

  if (isInitRun) {
    // Code only runs on the first time
  }
};
```

#### Returns

`boolean`

`true` on the first run of the component, otherwise, false

#### Defined in

[useIsInit.ts:19](https://github.com/seamusleahy/react-utils/blob/036cbf1/packages/init-hooks/src/useIsInit.ts#L19)

___

### useWhenInit

▸ **useWhenInit**(`callback`): `void`

Run a callback function on the first run of a functional component.

The callback function will run immediately unlike `useEffect`.
If you do not want it to immediately run, use [`useWhenInitAsync`](./useWhenInitAsync.ts) instead.

**`example`**
```typescript
const Example: React.FC = () => {
  useWhenInit(() => {
    // Code only runs on the first time
  });
};
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | Function to run on the first run |

#### Returns

`void`

#### Defined in

[useWhenInit.ts:20](https://github.com/seamusleahy/react-utils/blob/036cbf1/packages/init-hooks/src/useWhenInit.ts#L20)

___

### useWhenInitAsync

▸ **useWhenInitAsync**(`callback`): `void`

Run a callback function at the next event loop cycle after the first run of a functional component.

If you need it to run immediately, use [`useWhenInit`](./useWhenInit.ts) instead.

**`example`**
```typescript
const Example: React.FC = () => {
  useWhenInitAsync(() => {
    // Code only runs at the next event loop after the first time
  });
};
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | Function to run on the first run |

#### Returns

`void`

#### Defined in

[useWhenInitAsync.ts:19](https://github.com/seamusleahy/react-utils/blob/036cbf1/packages/init-hooks/src/useWhenInitAsync.ts#L19)
