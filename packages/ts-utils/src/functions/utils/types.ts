/**
 * Represents a type that can be either synchronous or asynchronous.
 * @type
 */
export type Awaitable<T> = T | PromiseLike<T>;

/**
 * Represents a type that can be either a value or `null` or `undefined`.
 * @type
 */
export type Nullable<T> = T | null | undefined;

/**
 * Represents a type that can be either a single value or an array of that value.
 * @type
 */
export type Arrayable<T> = T | Array<T>;

/**
 * Represents a utility type to convert a union to an intersection.
 * @type
 */
export type UnionToIntersection<U> = (
  U extends unknown ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

/**
 * Represents the type of arguments of a function.
 * @type
 */
export type ArgumentsType<T> = T extends (...arguments_: infer A) => unknown
  ? A
  : never;

/**
 * Represents a utility type to merge two types deeply.
 * @type
 */
export type MergeInsertions<T> = T extends object
  ? { [K in keyof T]: MergeInsertions<T[K]> }
  : T;

/**
 * Represents a utility type to deeply merge two types.
 * @type
 */
export type DeepMerge<F, S> = MergeInsertions<{
  [K in keyof F | keyof S]: K extends keyof S & keyof F
    ? DeepMerge<F[K], S[K]>
    : K extends keyof S
    ? S[K]
    : K extends keyof F
    ? F[K]
    : never;
}>;
