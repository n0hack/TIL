namespace TypeGuard {
  interface Vector3 {
    x: number;
    y: number;
    z: number;
  }

  function getComponent(vector: Vector3, axis: 'x' | 'y' | 'z') {
    return vector[axis];
  }

  const x = 'x'; // let으로 선언하면, string 타입으로 추론됨
  let vec = { x: 10, y: 20, z: 30 };
  getComponent(vec, x);
}

namespace Spread {
  declare let hasDates: boolean;
  const nameTitle = { name: 'Lucid', title: 'Developer' };
  const developer = {
    ...nameTitle,
    ...(hasDates ? { start: 10, end: 15 } : {}),
  };

  function addOptional<T extends object, U extends object>(a: T, b: U | null): T & Partial<U> {
    return { ...a, ...b };
  }

  const developer2 = addOptional(nameTitle, hasDates ? { start: 10, end: 15 } : null);
}
