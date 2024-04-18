namespace ch01 {
  const log = console.log;

  interface Vector2 {
    x: number;
    y: number;
  }

  interface Vector3D {
    x: number;
    y: number;
    z: number;
  }

  function calculateLength<T extends Vector2 | Vector3D>(v: T) {
    let length = 0;

    for (const axis of Object.keys(v) as Array<keyof T>) {
      const coord = v[axis] as number;
      length += Math.abs(coord);
    }

    return length;
  }

  function normalize(v: Vector3D) {
    const length = calculateLength(v);

    return {
      x: v.x / length,
      y: v.y / length,
      z: v.z / length,
    };
  }

  log(normalize({ x: 3, y: 4, z: 5 }));
}
