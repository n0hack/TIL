export function* filter(f, iter) {
  for (const a of iter) {
    if (f(a)) yield a;
  }
}

export function* map(f, iter) {
  for (const a of iter) {
    yield f(a);
  }
}

export function take(length, iter) {
  const res = [];

  for (const a of iter) {
    res.push(a);
    if (res.length === length) return res;
  }
  return res;
}

export function reduce(f, acc, iter) {
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
}

export const add = (a, b) => a + b;

export const square = (a) => a ** 2;

export const isOdd = (a) => a % 2;
