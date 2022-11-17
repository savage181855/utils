import { dataTypes } from "@savage181855/data-types";

export function each<T extends object>(
  obj: T,
  fn: (i: keyof T, v: T[keyof T], obj: T) => unknown
) {
  if (dataTypes.isObject(obj) || dataTypes.isArray(obj)) {
    for (let k in obj) {
      const res = fn(k, obj[k], obj);
      if (!res) break;
    }
  }
}

export class Iterator<T extends any[]> {
  constructor(obj: T) {
    let current = 0;

    this.next = () => {
      current += 1;
    };

    this.isDone = () => {
      return current >= this.length;
    };

    this.length = obj.length;

    this.getCurrentItem = () => {
      return obj[current];
    };
  }

  next: () => void;
  isDone: () => boolean;
  getCurrentItem: () => T[keyof T];
  length: number;
}
