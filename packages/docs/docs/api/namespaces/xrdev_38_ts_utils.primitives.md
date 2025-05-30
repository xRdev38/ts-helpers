---
id: "xrdev_38_ts_utils.primitives"
title: "Namespace: primitives"
sidebar_label: "@xrdev_38/ts-utils.primitives"
custom_edit_url: null
---

[@xrdev\_38/ts-utils](../modules/xrdev_38_ts_utils.md).primitives

## Functions

### isBigInt

▸ **isBigInt**\<`U`\>(`term`): term is bigint

Checks if the provided value is a bigint.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `term` | `bigint` \| `U` | The value to check. |

#### Returns

term is bigint

True if the value is a bigint, false otherwise.

#### Defined in

guards/primitives.ts:42

___

### isBoolean

▸ **isBoolean**\<`U`\>(`term`): term is boolean

Checks if the provided value is a boolean.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `term` | `boolean` \| `U` | The value to check. |

#### Returns

term is boolean

True if the value is a boolean, false otherwise.

#### Defined in

guards/primitives.ts:15

___

### isNull

▸ **isNull**\<`U`\>(`term`): term is null

Checks if the provided value is null.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `term` | ``null`` \| `U` | The value to check. |

#### Returns

term is null

True if the value is null, false otherwise.

#### Defined in

guards/primitives.ts:60

___

### isNumber

▸ **isNumber**\<`U`\>(`term`): term is number

Checks if the provided value is a number and not NaN.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `term` | `number` \| `U` | The value to check. |

#### Returns

term is number

True if the value is a number and not NaN, false otherwise.

#### Defined in

guards/primitives.ts:24

___

### isString

▸ **isString**\<`U`\>(`term`): term is string

Checks if the provided value is a string.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `term` | `string` \| `U` | The value to check. |

#### Returns

term is string

True if the value is a string, false otherwise.

#### Defined in

guards/primitives.ts:33

___

### isSymbol

▸ **isSymbol**\<`U`\>(`term`): term is symbol

Checks if the provided value is a symbol.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `term` | `symbol` \| `U` | The value to check. |

#### Returns

term is symbol

True if the value is a symbol, false otherwise.

#### Defined in

guards/primitives.ts:51

___

### isUndefined

▸ **isUndefined**\<`T`\>(`term`): term is undefined

Checks if the provided value is undefined.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `term` | `undefined` \| `T` | The value to check. |

#### Returns

term is undefined

True if the value is undefined, false otherwise.

#### Defined in

guards/primitives.ts:6
