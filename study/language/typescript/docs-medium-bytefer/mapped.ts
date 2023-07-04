// 배열의 map 메소드의 느낌으로 타입도 새롭게 맵핑이 가능함
type User = {
  name: string;
  password: string;
  address: string;
  phone: number;
};

type MyPartial<User> = {
  [P in keyof User]?: User[P];
};

// as를 사용하면 매핑된 유형의 키를 다시 매핑 가능
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
type LazyUser = Getters<User>;

type RemoveKindField<T> = {
  [K in keyof T as Exclude<K, 'kind'>]: T[K];
};

type Circle = {
  kind: 'circle';
  radius: number;
};

type RemoveCirclesKindField = RemoveKindField<Circle>;
