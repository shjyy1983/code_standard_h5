/**
 * @flow
 * @format
 */

interface LivingType {
  breath(times: number): number;
  bark(): void;
}

class Cat implements LivingType {
  age: number;
  breath(times: number): number {
    return times;
  }
  bark() {}
}

let a = 11;
