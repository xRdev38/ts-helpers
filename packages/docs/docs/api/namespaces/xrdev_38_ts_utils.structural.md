---
id: "xrdev_38_ts_utils.structural"
title: "Namespace: structural"
sidebar_label: "@xrdev_38/ts-utils.structural"
custom_edit_url: null
---

[@xrdev\_38/ts-utils](../modules/xrdev_38_ts_utils.md).structural

## Functions

### isArray

▸ **isArray**\<`T`, `U`\>(`term`): term is T[]

Checks if the provided value is an array.

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

True if the value is an array, false otherwise.

#### Defined in

guards/structural.ts:36

___

### isDate

▸ **isDate**\<`U`\>(`term`): term is Date

Checks if the provided value is a Date object.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `term` | `U` \| `Date` | The value to check. |

#### Returns

term is Date

True if the value is a Date object, false otherwise.

#### Defined in

guards/structural.ts:85

___

### isFunction

▸ **isFunction**\<`T`, `U`\>(`term`): term is T

Checks if the provided value is a function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |
| `U` | `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `term` | `T` \| `U` | The value to check. |

#### Returns

term is T

True if the value is a function, false otherwise.

#### Defined in

guards/structural.ts:16

___

### isMap

▸ **isMap**\<`K`, `V`, `U`\>(`term`): term is Map\<K, V\>

Checks if the provided value is a Map.

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `term` | `U` \| `Map`\<`K`, `V`\> | The value to check. |

#### Returns

term is Map\<K, V\>

True if the value is a Map, false otherwise.

#### Defined in

guards/structural.ts:45

___

### isNull

▸ **isNull**\<`T`\>(`term`): term is null

Checks if the provided value is null.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `term` | ``null`` \| `T` | The value to check. |

#### Returns

term is null

True if the value is null, false otherwise.

#### Defined in

guards/structural.ts:6

___

### isObject

▸ **isObject**\<`T`, `U`\>(`term`): term is T

Checks if the provided value is an object.

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

True if the value is an object (excluding null), false otherwise.

#### Defined in

guards/structural.ts:25

___

### isSet

▸ **isSet**\<`T`, `U`\>(`term`): term is Set\<T\>

Checks if the provided value is a Set.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `term` | `U` \| `Set`\<`T`\> | The value to check. |

#### Returns

term is Set\<T\>

True if the value is a Set, false otherwise.

#### Defined in

guards/structural.ts:54

___

### isWeakMap

▸ **isWeakMap**\<`K`, `V`, `U`\>(`term`): term is WeakMap\<K, V\>

Checks if the provided value is a WeakMap.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `object` |
| `V` | `V` |
| `U` | `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `term` | `U` \| `WeakMap`\<`K`, `V`\> | The value to check. |

#### Returns

term is WeakMap\<K, V\>

True if the value is a WeakMap, false otherwise.

#### Defined in

guards/structural.ts:63

___

### isWeakSet

▸ **isWeakSet**\<`T`, `U`\>(`term`): term is WeakSet\<T\>

Checks if the provided value is a WeakSet.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `U` | `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `term` | `U` \| `WeakSet`\<`T`\> | The value to check. |

#### Returns

term is WeakSet\<T\>

True if the value is a WeakSet, false otherwise.

#### Defined in

guards/structural.ts:74
