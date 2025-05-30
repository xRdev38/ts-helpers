---
id: "xrdev_38_ts_utils.convenience"
title: "Namespace: convenience"
sidebar_label: "@xrdev_38/ts-utils.convenience"
custom_edit_url: null
---

[@xrdev\_38/ts-utils](../modules/xrdev_38_ts_utils.md).convenience

## Functions

### isInteger

▸ **isInteger**\<`U`\>(`term`): term is number

Checks if the provided term is an integer.

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

True if the term is an integer, otherwise false.

#### Defined in

guards/convenience.ts:45

___

### isNegativeInteger

▸ **isNegativeInteger**\<`U`\>(`term`): term is number

Checks if the provided term is a negative integer.

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

True if the term is a negative integer, otherwise false.

#### Defined in

guards/convenience.ts:72

___

### isNonEmptyArray

▸ **isNonEmptyArray**\<`T`, `U`\>(`term`): term is T[]

Checks if the provided term is a non-empty array.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `term` | `U` \| `T`[] | The value to check. |

#### Returns

term is T[]

True if the term is a non-empty array, otherwise false.

#### Defined in

guards/convenience.ts:18

___

### isNonEmptyString

▸ **isNonEmptyString**\<`U`\>(`term`): term is string

Checks if the provided term is a non-empty string.

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

True if the term is a non-empty string, otherwise false.

#### Defined in

guards/convenience.ts:27

___

### isNonNegativeInteger

▸ **isNonNegativeInteger**\<`U`\>(`term`): term is number

Checks if the provided term is a non-negative integer.

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

True if the term is a non-negative integer, otherwise false.

#### Defined in

guards/convenience.ts:63

___

### isNumberOrNaN

▸ **isNumberOrNaN**\<`U`\>(`term`): term is number

Checks if the provided term is a number or NaN.

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

True if the term is a number, otherwise false.

#### Defined in

guards/convenience.ts:36

___

### isObjectOrNull

▸ **isObjectOrNull**\<`T`, `U`\>(`term`): term is T

Checks if the provided term is an object or null.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `U` | `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `term` | `T` \| `U` | The value to check. |

#### Returns

term is T

True if the term is an object or null, otherwise false.

#### Defined in

guards/convenience.ts:9

___

### isPositiveInteger

▸ **isPositiveInteger**\<`U`\>(`term`): term is number

Checks if the provided term is a positive integer.

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

True if the term is a positive integer, otherwise false.

#### Defined in

guards/convenience.ts:54
