// duck typing
interface Vector2D {
  x: number;
  y: number;
}

interface NamedVector {
  name: string;
  x: number;
  y: number;
}

function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

const v: NamedVector = { x: 3, y: 4, name: 'Lucid' };
calculateLength(v); // OK. 구조가 호환되므로, 구조적 타이핑에 의해 문제가 없음

interface Vector3D {
  x: number;
  y: number;
  z: number;
}

function normalize(v: Vector3D) {
  // Vector3의 값이 Vector2D에도 있으므로 구조적 타이핑 관점에서 문제가 없음
  const length = calculateLength(v);
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  };
}
normalize({ x: 3, y: 4, z: 5 });
