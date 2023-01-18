// 구조(변수, 메서드)가 같다면 해당 타입과 동일하다고 판단하는 타입 검사 방식
// 덕 타이핑 덕에 유닛 테스팅을 손쉽게 할 수 있음 (Mock API 타입 등을 만들어 두면, 그렇게 동작할 것이란 걸 알 수 있으므로)
interface Vector2D {
  x: number;
  y: number;
}

function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

interface NamedVector2D {
  name: string;
  x: number;
  y: number;
}

const v: NamedVector2D = { x: 3, y: 4, name: 'Ming' };
console.log(calculateLength(v));

interface Vector3D {
  x: number;
  y: number;
  z: number;
}

function normalize(v: Vector3D) {
  // 타입은 항상 열려있음
  const length = calculateLength(v);
  return { x: v.x / length, y: v.y / length, z: v.z / length };
}
