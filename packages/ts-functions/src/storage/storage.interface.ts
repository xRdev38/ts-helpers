export abstract class DataStorage {
  /* typescript-eslint-disable no-implicit-any */
  abstract put(key: string, value: any): void;

  /* typescript-eslint-disable no-implicit-any */
  abstract get(key: string, factory?: new <T>(data: T) => T): any;

  abstract remove(key: string): void;

  abstract clear(): void;
}
