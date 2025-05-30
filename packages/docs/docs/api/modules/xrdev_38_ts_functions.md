---
id: "xrdev_38_ts_functions"
title: "Module: @xrdev_38/ts-functions"
sidebar_label: "@xrdev_38/ts-functions"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [ConfigParameters](../interfaces/xrdev_38_ts_functions.ConfigParameters.md)
- [ParameterConfig](../interfaces/xrdev_38_ts_functions.ParameterConfig.md)

## Type Aliases

### Logger

Ƭ **Logger**: `winston.Logger`

Represents a Logger instance from the Winston library.

#### Defined in

logger/logger.ts:15

## Variables

### levels

• **levels**: `NpmConfigSetLevels`

#### Defined in

logger/logger.ts:10

## Functions

### Mixin

▸ **Mixin**(`baseCtors`): `any`

A decorator that applies a mixin to a class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseCtors` | `Function`[] | The array of mixin classes. |

#### Returns

`any`

A decorator function.

#### Defined in

decorators/mixin/mixin.ts:7

___

### SortBy

▸ **SortBy**\<`T`\>(`sortByProperty`, `options?`): (`target`: `any`, `propertyKey`: `string`, `descriptor?`: `PropertyDescriptor`) => `void`

A decorator for sorting an array property of a class.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sortByProperty` | `string` \| `number` \| `symbol` | The property to sort the array by. |
| `options` | `Object` | Sorting options. |
| `options.isDescending` | `boolean` | Whether to sort in descending order. |
| `options.type` | `string` | The data type of the property for sorting (e.g., 'string', 'date'). |

#### Returns

`fn`

A decorator function.

▸ (`target`, `propertyKey`, `descriptor?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `propertyKey` | `string` |
| `descriptor?` | `PropertyDescriptor` |

##### Returns

`void`

#### Defined in

decorators/sortBy/sort-by.ts:20

___

### bind

▸ **bind**(`target`, `key`, `descriptor`): `PropertyDescriptor`

Autobinds the method to the instance, ensuring it has access to the correct 'this' context.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `any` | The target object. |
| `key` | `string` | The name of the method. |
| `descriptor` | `PropertyDescriptor` | The method descriptor. |

#### Returns

`PropertyDescriptor`

The updated method descriptor.

**`Throws`**

Throws an error if applied to a non-function property.

#### Defined in

decorators/bind/bind.ts:10

___

### createLogger

▸ **createLogger**(`options`): `Logger`

Creates a Winston Logger instance with the specified configuration.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | `Object` | `undefined` | Configuration options for the logger. |
| `options.config?` | [`ConfigParameters`](../interfaces/xrdev_38_ts_functions.ConfigParameters.md) | `undefined` | - |
| `options.logLevel?` | `string` | `'info'` | - |
| `options.service?` | `string` | `undefined` | - |

#### Returns

`Logger`

The created Winston Logger instance.

#### Defined in

logger/logger.ts:76

___

### debounce

▸ **debounce**(`milliseconds?`, `options?`): `any`

Decorator for debouncing a method.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `milliseconds` | `number` | `0` | The debounce time in milliseconds. |
| `options` | `object` | `{}` | Options for lodash.debounce. |

#### Returns

`any`

A decorator function.

#### Defined in

decorators/debounce/debounce.ts:10

___

### delay

▸ **delay**(`milliseconds?`): `any`

Decorator for delaying the execution of a method.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `milliseconds` | `number` | `0` | The delay time in milliseconds. |

#### Returns

`any`

A decorator function.

#### Defined in

decorators/delay/delay.ts:7

___

### downloadBlob

▸ **downloadBlob**(`blob`, `fileName`): `void`

Downloads a Blob as a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blob` | `Blob` | The Blob to be downloaded. |
| `fileName` | `string` | The name of the file. |

#### Returns

`void`

#### Defined in

download/download.ts:23

___

### downloadJson

▸ **downloadJson**(`data`, `fileName`): `void`

Downloads a JSON object as a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `object` | The JSON object to be downloaded. |
| `fileName` | `string` | The name of the file. |

#### Returns

`void`

#### Defined in

download/download.ts:33

___

### downloadUrl

▸ **downloadUrl**(`url`, `fileName`): `void`

Downloads a URL as a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL to be downloaded. |
| `fileName` | `string` | The name of the file. |

#### Returns

`void`

#### Defined in

download/download.ts:6

___

### memo

▸ **memo**(`resolver?`): `any`

Decorator for memoizing the result of a method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resolver?` | (...`arguments_`: `any`[]) => `any` | Custom resolver function for memoization. |

#### Returns

`any`

A decorator function.

#### Defined in

decorators/memoize/memoize.ts:9
