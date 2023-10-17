type T0 = string[];
type T1 = () => string;

type UnpackedArray<T> = T extends (infer U)[] ? U : T;
type U0 = UnpackedArray<T0>;

type UnpackedFn<T> = T extends (...args: any[]) => infer U ? U : T;
type U1 = UnpackedFn<T1>;

type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T;

type User = {
  id: number;
  name: string;
};

type PropertyType<T> = T extends { id: infer U; name: infer R } ? [U, R] : T;
type U3 = PropertyType<User>;

type PropertyType2<T> = T extends { id: infer U; name: infer U } ? U : T;
type U4 = PropertyType2<User>;
