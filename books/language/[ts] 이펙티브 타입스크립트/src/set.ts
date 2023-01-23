interface Person {
  name: string;
}

interface Lifespan {
  birth: Date;
  death?: Date;
}

type PersonSpan = Person & Lifespan;

const ps: PersonSpan = {
  name: 'John',
  birth: new Date(),
  death: new Date(),
};

// never
type K = keyof (Person | Lifespan);
type K2 = keyof Person & keyof Lifespan;

function getKey<K extends string>(val: any, key: K) {
  return key;
}
