---
id: "xrdev_38_ts_utils"
title: "Module: @xrdev_38/ts-utils"
sidebar_label: "@xrdev_38/ts-utils"
sidebar_position: 0
custom_edit_url: null
---

## Namespaces

- [convenience](../namespaces/xrdev_38_ts_utils.convenience.md)
- [primitives](../namespaces/xrdev_38_ts_utils.primitives.md)
- [structural](../namespaces/xrdev_38_ts_utils.structural.md)

## References

### isBigInt

Re-exports [isBigInt](../namespaces/xrdev_38_ts_utils.primitives.md#isbigint)

___

### isBoolean

Re-exports [isBoolean](../namespaces/xrdev_38_ts_utils.primitives.md#isboolean)

___

### isInteger

Re-exports [isInteger](../namespaces/xrdev_38_ts_utils.convenience.md#isinteger)

___

### isNegativeInteger

Re-exports [isNegativeInteger](../namespaces/xrdev_38_ts_utils.convenience.md#isnegativeinteger)

___

### isNonEmptyArray

Re-exports [isNonEmptyArray](../namespaces/xrdev_38_ts_utils.convenience.md#isnonemptyarray)

___

### isNonEmptyString

Re-exports [isNonEmptyString](../namespaces/xrdev_38_ts_utils.convenience.md#isnonemptystring)

___

### isNonNegativeInteger

Re-exports [isNonNegativeInteger](../namespaces/xrdev_38_ts_utils.convenience.md#isnonnegativeinteger)

___

### isNull

Re-exports [isNull](../namespaces/xrdev_38_ts_utils.primitives.md#isnull)

___

### isNumber

Re-exports [isNumber](../namespaces/xrdev_38_ts_utils.primitives.md#isnumber)

___

### isNumberOrNaN

Re-exports [isNumberOrNaN](../namespaces/xrdev_38_ts_utils.convenience.md#isnumberornan)

___

### isObjectOrNull

Re-exports [isObjectOrNull](../namespaces/xrdev_38_ts_utils.convenience.md#isobjectornull)

___

### isPositiveInteger

Re-exports [isPositiveInteger](../namespaces/xrdev_38_ts_utils.convenience.md#ispositiveinteger)

___

### isString

Re-exports [isString](../namespaces/xrdev_38_ts_utils.primitives.md#isstring)

___

### isSymbol

Re-exports [isSymbol](../namespaces/xrdev_38_ts_utils.primitives.md#issymbol)

___

### isUndefined

Re-exports [isUndefined](../namespaces/xrdev_38_ts_utils.primitives.md#isundefined)

## Functions

### assert

▸ **assert**(`condition`, `message`): asserts condition

Asserts a condition and throws an error with the provided message if the condition is false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `condition` | `boolean` | The condition to assert. |
| `message` | `string` | The error message to throw if the condition is false. |

#### Returns

asserts condition

**`Throws`**

Throws an error with the provided message if the condition is false.

#### Defined in

functions/core/assert/assert.ts:7

___

### at

▸ **at**\<`T`\>(`array`, `iterator`): `T` \| `undefined`

Retrieves an element from an array at a specified iterator.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | readonly `T`[] \| `T`[] | The array. |
| `iterator` | `number` | The iterator of the element to retrieve. |

#### Returns

`T` \| `undefined`

The element at the specified iterator.

#### Defined in

functions/array/at/at.ts:9

___

### buildQueryString

▸ **buildQueryString**(`parameters`, `traditional?`): `string`

Generate a query string from an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | `object` & \{ `[key: string]`: `any`;  } | Object containing the keys and values to be used. |
| `traditional?` | `boolean` | Boolean Use the old URI template standard (RFC6570) |

#### Returns

`string`

The generated query string, excluding leading '?'.

#### Defined in

functions/path/build-query-string/build-query-string.ts:54

___

### camelize

▸ **camelize**(`text`, `chars?`): `string`

Converts a text string to camelCase format.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `any` | `undefined` | The input text to be converted. |
| `chars` | `string` | `'\\s'` | A string containing characters to be treated as separators. Defaults to whitespace characters ('\\s'). |

#### Returns

`string`

The camelCase formatted string.

#### Defined in

functions/string/camelize/camelize.ts:11

___

### capitalize

▸ **capitalize**(`strArray`, `lowerRest?`): `string`

Capitalizes the first letter of a string.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `strArray` | `string`[] | `undefined` | An array of string characters. |
| `lowerRest` | `boolean` | `false` | Should the rest of the characters be lowercased? Default is false. |

#### Returns

`string`

The capitalized string.

#### Defined in

functions/string/capitalize/capitalize.ts:8

___

### chunk

▸ **chunk**\<`T`\>(`array`, `size`): `T`[][]

Splits an array into chunks of a specified size.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to be split. |
| `size` | `number` | The size of each chunk. |

#### Returns

`T`[][]

An array of chunks.

#### Defined in

functions/array/chunk/chunk.ts:8

___

### clamp

▸ **clamp**(`n`, `min`, `max`): `number`

Clamps a number within a specified range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | The number to be clamped. |
| `min` | `number` | The minimum value of the range. |
| `max` | `number` | The maximum value of the range. |

#### Returns

`number`

The clamped number.

#### Defined in

functions/math/clamp/clamp.ts:8

___

### clampArrayRange

▸ **clampArrayRange**(`n`, `array`): `number`

Clamps a value to a valid iterator within an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | The value to be clamped. |
| `array` | `unknown`[] | The array. |

#### Returns

`number`

The clamped iterator.

#### Defined in

functions/array/clamp-array-change/clamp-array-range.ts:9

___

### convertToSeoSlug

▸ **convertToSeoSlug**(`string_`): `string`

Converts a string to a SEO-friendly slug.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string_` | `string` | The string to be converted. |

#### Returns

`string`

The SEO-friendly slug.

#### Defined in

functions/string/convert-seo-slug/convert-seo-slug.ts:9

___

### convertToValidId

▸ **convertToValidId**(`string_`): `string`

Converts a piece of HTML text to a valid id name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string_` | `string` | The string to be converted. |

#### Returns

`string`

The valid id name.

#### Defined in

functions/string/convert-to-valid-id/convert-to-valid-id.ts:10

___

### diffObject

▸ **diffObject**(`object`, `original?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `original` | `any` |

#### Returns

`any`

#### Defined in

functions/object/diff-object/diff-object.ts:5

___

### ensurePrefix

▸ **ensurePrefix**(`prefix`, `string_`): `string`

Ensures a prefix in a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | The prefix to ensure. |
| `string_` | `string` | The string to check and modify. |

#### Returns

`string`

The string with the specified prefix.

#### Defined in

functions/string/ensure-prefix/ensure-prefix.ts:8

___

### ensureSuffix

▸ **ensureSuffix**(`suffix`, `string_`): `string`

Ensures a suffix in a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `suffix` | `string` | The suffix to ensure. |
| `string_` | `string` | The string to check and modify. |

#### Returns

`string`

The string with the specified suffix.

#### Defined in

functions/string/ensure-suffix/ensure-suffix.ts:8

___

### escapeHTML

▸ **escapeHTML**(`string_`): `string`

Replaces unsafe characters with HTML-safe ones.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string_` | `string` | The string to be escaped. |

#### Returns

`string`

The HTML-escaped string.

#### Defined in

functions/string/escape-html/escape-html.ts:7

___

### flattenArrayable

▸ **flattenArrayable**\<`T`\>(`array?`): `T`[]

Converts a nullable or arrayable value to a flat array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array?` | `Nullable`\<`Arrayable`\<`T` \| `T`[]\>\> | The arrayable or nullable array. |

#### Returns

`T`[]

The flattened array.

#### Defined in

functions/array/flat-arrayable/flat-arrayable.ts:10

___

### getKeys

▸ **getKeys**(`object`): `any`[]

Returns an array of strings representing all the enumerable property names of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `any` | The input object. |

#### Returns

`any`[]

An array of strings representing the keys of the object.

#### Defined in

functions/object/keys/get-keys.ts:9

___

### getTypeName

▸ **getTypeName**(`v`): `string`

Returns the name of the type of the provided value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `unknown` | The value whose type name is to be determined. |

#### Returns

`string`

The name of the type.

#### Defined in

functions/core/get-type-name/get-type-name.ts:8

___

### invertBy

▸ **invertBy**(`object`, `callback?`): `Object`

Creates an object composed of keys generated from the results of running
each element of the input object through a callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `any` | The input object to invert. |
| `callback?` | `Function` | The callback function to transform values. Defaults to the identity function. |

#### Returns

`Object`

An object with inverted keys based on the results of the callback function.

#### Defined in

functions/object/invert-by/invert-by.ts:11

___

### isDeepEqual

▸ **isDeepEqual**(`value1`, `value2`): `boolean`

Checks if two values are deeply equal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `any` | The first value to compare. |
| `value2` | `any` | The second value to compare. |

#### Returns

`boolean`

Returns true if the values are deeply equal, false otherwise.

#### Defined in

functions/equal/equal.ts:11

___

### join

▸ **join**(`path1`, `path2`): `string`

Joins two paths.
from aurelia-path

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path1` | ``null`` \| `string` | The first path. |
| `path2` | ``null`` \| `string` | The second path. |

#### Returns

`string`

The joined path.

#### Defined in

functions/path/join/join.ts:43

___

### last

▸ **last**\<`T`\>(`array`): `T` \| `undefined`

Retrieves the last element from an array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | readonly `T`[] | The array. |

#### Returns

`T` \| `undefined`

The last element in the array.

#### Defined in

functions/array/last/last.ts:10

___

### lerp

▸ **lerp**(`min`, `max`, `t`): `number`

Linearly interpolates between two values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | The minimum value. |
| `max` | `number` | The maximum value. |
| `t` | `number` | The interpolation factor. |

#### Returns

`number`

The interpolated value.

#### Defined in

functions/math/lerp/lerp.ts:10

___

### mergeArrayable

▸ **mergeArrayable**\<`T`\>(`...arguments_`): `T`[]

Merges multiple arrayable values into a single array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...arguments_` | `Nullable`\<`Arrayable`\<`T`\>\>[] | The arrayable values to be merged. |

#### Returns

`T`[]

The merged array.

#### Defined in

functions/array/merge-arrayable/merge-arrayable.ts:11

___

### move

▸ **move**\<`T`\>(`array`, `from`, `to`): `T`[]

Moves an element within an array from one iterator to another.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array. |
| `from` | `number` | The current iterator of the element. |
| `to` | `number` | The target iterator for the element. |

#### Returns

`T`[]

The modified array.

#### Defined in

functions/array/move/move.ts:9

___

### noop

▸ **noop**(): `void`

An empty function that does nothing.

#### Returns

`void`

#### Defined in

functions/core/noop/noop.ts:4

___

### omit

▸ **omit**(`object`, `...arguments_`): `Object`

Creates an object composed of the key-value pairs from the input object,
excluding the specified keys.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `any` | The input object to omit key-value pairs from. |
| `...arguments_` | `string`[] | The keys to omit from the object. |

#### Returns

`Object`

An object with key-value pairs excluding the specified keys.

#### Defined in

functions/object/omit/omit.ts:11

___

### pick

▸ **pick**(`object`, `...arguments_`): `Object`

Creates an object composed of the picked key-value pairs from the input object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `any` | The input object to pick key-value pairs from. |
| `...arguments_` | `string`[] | The keys to pick from the object. |

#### Returns

`Object`

An object with selected key-value pairs from the input object.

#### Defined in

functions/object/pick/pick.ts:10

___

### range

▸ **range**(`...arguments_`): `number`[]

Generates an array of numbers within a specified range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...arguments_` | `number`[] | The start, stop, and step values (or just stop). |

#### Returns

`number`[]

The generated array.

#### Defined in

functions/array/range/range.ts:6

___

### remap

▸ **remap**(`n`, `inMin`, `inMax`, `outMin`, `outMax`): `number`

Remaps a value from one range to another.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | The value to be remapped. |
| `inMin` | `number` | The minimum value of the input range. |
| `inMax` | `number` | The maximum value of the input range. |
| `outMin` | `number` | The minimum value of the output range. |
| `outMax` | `number` | The maximum value of the output range. |

#### Returns

`number`

The remapped value.

#### Defined in

functions/math/remap/remap.ts:12

___

### remove

▸ **remove**\<`T`\>(`array`, `value`): `boolean`

Removes an element from an array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array. |
| `value` | `T` | The value to be removed. |

#### Returns

`boolean`

True if the value was removed; otherwise, false.

#### Defined in

functions/array/remove/remove.ts:9

___

### reverse

▸ **reverse**(`input`): `unknown`

Reverses the input string or array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `unknown` | The input string or array to be reversed. |

#### Returns

`unknown`

The reversed string or array.

#### Defined in

functions/string/reverse/reverse.ts:9

___

### sample

▸ **sample**\<`T`\>(`array`, `quantity`): `T`[]

Retrieves a random sample of elements from an array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array. |
| `quantity` | `number` | The number of elements to retrieve. |

#### Returns

`T`[]

The random sample.

#### Defined in

functions/array/sample/sample.ts:8

___

### slash

▸ **slash**(`string_`): `string`

Replaces backslashes with slashes in a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string_` | `string` | The string to be processed. |

#### Returns

`string`

The string with backslashes replaced by slashes.

#### Defined in

functions/string/slash/slash.ts:7

___

### stripHTMLTags

▸ **stripHTMLTags**(`string_`): `string`

Strips HTML format from a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string_` | `string` | The HTML string to be stripped. |

#### Returns

`string`

The string with HTML format stripped.

#### Defined in

functions/string/strip-html-tags/strip-html-tags.ts:7

___

### stripMarkdownFormat

▸ **stripMarkdownFormat**(`string_`): `string`

Strips Markdown format from a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string_` | `string` | The markdown string to be stripped. |

#### Returns

`string`

The string with Markdown format stripped.

#### Defined in

functions/string/strip-markdown-format/strip-markdown-format.ts:7

___

### template

▸ **template**(`string_`, `...arguments_`): `string`

Simple template engine similar to Python's `.format()`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string_` | `string` | The template string. |
| `...arguments_` | `unknown`[] | Values to replace placeholders in the template. |

#### Returns

`string`

The formatted string.

#### Defined in

functions/string/template/template.ts:10

___

### toArray

▸ **toArray**\<`T`\>(`array?`): `T`[]

Converts a nullable or arrayable value to an array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array?` | `Nullable`\<`Arrayable`\<`T`\>\> | The arrayable or nullable array. |

#### Returns

`T`[]

The converted array.

#### Defined in

functions/array/to-array/to-array.ts:9

___

### toKebabCase

▸ **toKebabCase**(`string_`): `string`

Converts a given string to kebab-case.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string_` | `string` | The string to be converted. |

#### Returns

`string`

The string in kebab-case format.

#### Defined in

functions/string/to-kebab-case/to-kebab-case.ts:7

___

### toString

▸ **toString**(`v`): `string`

Returns the string representation of the type of the provided value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `unknown` | The value whose type is to be determined. |

#### Returns

`string`

The string representation of the type.

#### Defined in

functions/core/to-string/to-string.ts:6

___

### trim

▸ **trim**(`text`, `chars?`): `string`

Removes leading and trailing characters specified in chars from the input text.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | The input text to be trimmed. |
| `chars` | `string` | `'\\s'` | A string containing characters to be treated as trimmable. Defaults to whitespace characters ('\\s'). |

#### Returns

`string`

The text with leading and trailing characters removed.

#### Defined in

functions/string/trim/trim.ts:11

___

### uniq

▸ **uniq**\<`T`\>(`array`): `T`[]

Removes duplicate elements from an array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to be deduplicated. |

#### Returns

`T`[]

The array with unique elements.

#### Defined in

functions/array/uniq/uniq.ts:6

___

### wrap

▸ **wrap**(`string_`, `prefix?`, `suffix?`): `string`

Wraps the input string with the specified prefix and suffix.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `string_` | `string` | `undefined` | The input string to be wrapped. |
| `prefix` | `string` | `''` | The string to be added as a prefix. Defaults to an empty string. |
| `suffix` | `string` | `''` | The string to be added as a suffix. Defaults to an empty string. |

#### Returns

`string`

The input string wrapped with the specified prefix and suffix.

#### Defined in

functions/string/wrap/wrap.ts:11
