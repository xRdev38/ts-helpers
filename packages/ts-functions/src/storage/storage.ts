import { injectable } from 'inversify';
import { DataStorage } from './storage.interface';

@injectable()
export default class DataStorageService implements DataStorage {
  /* typescript-eslint-disable no-implicit-any */
  put(key: string, value: any): void {
    if (!this.hasLocalStorage()) {
      return;
    }

    window.localStorage.setItem(key, JSON.stringify(value));
  }

  get<T>(key: string, Factory?: new (data: T) => T): T | T[] | undefined {
    if (!this.hasLocalStorage() || !window.localStorage.getItem(key)) {
      return undefined;
    }

    const data = JSON.parse(window.localStorage.getItem(key) ?? '');
    if (!Factory) {
      return data;
    }

    if (Array.isArray(data)) {
      return data.map(item => new Factory(item));
    }

    return new Factory(data);
  }

  remove(key: string): void {
    if (this.hasLocalStorage() && window.localStorage.getItem(key)) {
      window.localStorage.removeItem(key);
    }
  }

  clear(): void {
    if (!this.hasLocalStorage()) {
      return;
    }

    while (window.localStorage.length > 0) {
      window.localStorage.removeItem(window.localStorage.key(0) ?? '');
    }
  }

  hasLocalStorage(): boolean {
    return !!window.localStorage.key(1);
  }
}
