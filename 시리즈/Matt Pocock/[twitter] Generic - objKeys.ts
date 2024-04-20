const objKeys = <T extends object>(obj: T) => {
  return Object.keys(obj) as Array<keyof T>;
};

const o = {
  a: 1,
  b: 2,
  c: 3,
};

const keys = objKeys(o);
