[@seamusleahy/const-value-hook](README.md) / Exports

# @seamusleahy/const-value-hook

## Table of contents

### Functions

- [useConstValue](modules.md#useconstvalue)

## Functions

### useConstValue

▸ **useConstValue**<`T`\>(`factory`): `T`

Create a value that will be the same across all the render calls.

**`example`**
```typescript
const Example: FC = () => {
  // `cache` will be the same `Set` for the life of the component
  const cache = useConstValue(() => new Set<string, number>());
  // ...
}
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `factory` | () => `T` | Function to create the initial value |

#### Returns

`T`

#### Defined in

[useConstValue.ts:17](https://github.com/seamusleahy/react-utils/blob/328ce1f/packages/const-value-hook/src/useConstValue.ts#L17)
