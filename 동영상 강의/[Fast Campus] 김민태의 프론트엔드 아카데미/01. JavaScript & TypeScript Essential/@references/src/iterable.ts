namespace IterableProtocol {
  interface Iterable<T> {
    [Symbol.iterator](): Iterator<T>;
  }

  interface Iterator<T> {
    next(): IteratorResult<T>;
  }

  interface IteratorResult<T> {
    value: T;
    done: boolean;
  }

  class Fibonacci implements Iterable<number> {
    private a = 0;
    private b = 1;

    constructor(private max: number = 10) {}

    [Symbol.iterator](): Iterator<number> {
      return {
        next: () => {
          [this.a, this.b] = [this.b, this.a + this.b];
          return {
            value: this.a,
            done: this.a >= this.max,
          };
        },
      };
    }
  }

  for (const num of new Fibonacci(100)) {
    console.log(num);
  }
}
