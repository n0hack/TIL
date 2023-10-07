namespace Set {
  type Person = {
    name: string;
  };

  type Lifespan = {
    birth: Date;
    death?: Date;
  };

  // 둘다 될 수 있는 타입 (Person, Lifespan)
  type PersonSpan = Person & Lifespan;
}

namespace ExcessPropertyCheck {
  type Room = {
    numDoors: number;
    ceilingHeightFt: number;
  };

  const r: Room = {
    numDoors: 1,
    ceilingHeightFt: 10,
    // elephant: 'present', 에러 발생 (잉여 속성 체크)
  };

  const obj = {
    numDoors: 1,
    ceilingHeightFt: 10,
    elephant: 'present',
  };

  const r2: Room = obj; // 구조적 관점에서 통과
}

namespace TypeOperation {
  const INIT_OPTIONS = {
    width: 640,
    height: 480,
    color: '#00FF00',
    label: 'VGA',
  };

  type Options = typeof INIT_OPTIONS;
}
