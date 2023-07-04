/**
 * https://velog.io/@gomjellie/You-dont-know-type
 */

// Recursive Conditional Types
type Includes<X, XS> = XS extends [infer First, ...infer Rest] ? (First extends X ? true : Includes<X, Rest>) : false;

type T1 = Includes<1, [1, 2, 3]>; // true
type F1 = Includes<4, [1, 2, 3]>; // false
