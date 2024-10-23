interface UnionBuilder<T = never> {
  add: <NewValue>() => UnionBuilder<T | NewValue>;
  value: T;
}

declare const u: UnionBuilder;

const result = u.add<number>().add<string>().value;

console.log(result);
