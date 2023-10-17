type T0 = string[];
type T1 = () => string;

type UnpackedArray<T> = T extends (infer U)[] ? U : T;
type U0 = UnpackedArray<T0>;
