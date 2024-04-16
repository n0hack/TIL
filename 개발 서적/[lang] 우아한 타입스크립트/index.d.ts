// 앰비언트 타입을 통해 전역에서 사용하기 좋은 타입을 만들 수 있다.
type Optional<T extends object, K extends keyof T = keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

declare type Nullable<T> = T | null;
