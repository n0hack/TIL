namespace Generics {
  class BeeKeeper {
    hasMask = true;
  }

  class ZooKeeper {
    nametag = 'Mikle';
  }

  class Animal {
    numLegs = 4;
  }

  class Bee extends Animal {
    keeper = new BeeKeeper();
  }

  class Lion extends Animal {
    keeper = new ZooKeeper();
  }

  function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
  }
  // console.log(createInstance(Lion).keeper.nametag);
  // console.log(createInstance(Bee).keeper.hasMask);
}

namespace Keyof {
  type Point = { x: number; y: number };
  type P = keyof Point;

  type Arrayish = { [n: number]: unknown };
  type A = keyof Arrayish;

  type Mapish = { [k: string]: boolean };
  type M = keyof Mapish;
}
