[@seamusleahy/values-changes-hooks](README.md) / Exports

# @seamusleahy/values-changes-hooks

## Table of contents

### Functions

- [useHaveValuesChanged](modules.md#usehavevalueschanged)
- [useWhenValuesChange](modules.md#usewhenvalueschange)

## Functions

### useHaveValuesChanged

▸ **useHaveValuesChanged**<`T`\>(`values`, `trueOnFirstRun`): `boolean`

Find out when an array of values has changed from the previous rendering.
Meant as an alternative to using `useEffect` for watching change of values.

**`example`**

```typescript
const Example: FC<{name: string}> = ({ name }) => {
  const nameChanges = useHaveValuesChanged([name], true);
  if (nameChanges) {
    logger.log('Name change', name);
  }
  // ...
}
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends readonly `any`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `T` | An array of values to be evaluated |
| `trueOnFirstRun` | `boolean` | Set to `true` to get `true` on the first rendering. |

#### Returns

`boolean`

#### Defined in

[useHaveValuesChanged.ts:22](https://github.com/seamusleahy/react-utils/blob/328ce1f/packages/values-changed-hooks/src/useHaveValuesChanged.ts#L22)

___

### useWhenValuesChange

▸ **useWhenValuesChange**<`T`\>(`fn`, `deps`, `trueOnFirstRun?`): `void`

Execute code when an array of values has changed from the previous rendering.
Meant as an alternative to using `useEffect` for watching change of values.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends readonly `any`[] |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fn` | () => `void` | `undefined` | Callback to call when the value have changed |
| `deps` | `T` | `undefined` | An array of values to be evaluated |
| `trueOnFirstRun` | `boolean` | `true` | Set to `true` to get `true` on the first rendering.   * ```typescript const Example: FC<{name: string}> = ({ name }) => {   useWhenValuesChange(() => logger.log('Name change', name), [name] ,true);   // ... } ``` |

#### Returns

`void`

#### Defined in

[useWhenValuesChange.ts:18](https://github.com/seamusleahy/react-utils/blob/328ce1f/packages/values-changed-hooks/src/useWhenValuesChange.ts#L18)
