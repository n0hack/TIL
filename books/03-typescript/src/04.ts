namespace Enum {
  enum TempDirection {
    FtoC,
    CtoF,
  }
  function convertTemperature(temp: number, fromTo: TempDirection) {
    return TempDirection.FtoC === fromTo
      ? ((temp - 32) * 5.0) / 9.0
      : (temp * 9.0) / 5.0 + 32;
  }
  console.log(`70F is ${convertTemperature(70, TempDirection.FtoC)}C`);
  console.log(`21C is ${convertTemperature(21, TempDirection.CtoF)}F`);

  // enum 앞에 const를 붙이면 자바스크립트 코드로 컴파일되지 않음
  const enum Direction {
    Up = 'UP',
    Down = 'DOWN',
  }
}

namespace Generic {
  Array<number>(1);

  interface Comparator<T> {
    compareTo(value: T): number;
  }

  class Rectangle implements Comparator<Rectangle> {
    constructor(private width: number, private height: number) {}
    compareTo(value: Rectangle): number {
      return this.width * this.height - value.width * value.height;
    }
  }
  const rect1: Rectangle = new Rectangle(2, 5);
  const rect2: Rectangle = new Rectangle(2, 3);

  rect1.compareTo(rect2) > 0
    ? console.log('rect1이 더 큼')
    : console.log('rect2가 더 크거나 같음');

  class Programmmer implements Comparator<Programmmer> {
    constructor(public name: string, private salary: number) {}
    compareTo(value: Programmmer): number {
      return this.salary - value.salary;
    }
  }
  const prog1: Programmmer = new Programmmer('NoHack', 20000);
  const prog2: Programmmer = new Programmmer('Jihun', 15000);

  prog1.compareTo(prog2) > 0
    ? console.log(`${prog1.name}의 급여가 더 높음`)
    : console.log('아님');

  class Pair<K, V> {
    constructor(public key: K, public value: V) {}
  }
  function compare<K, V>(pair1: Pair<K, V>, pair2: Pair<K, V>): boolean {
    return pair1.key === pair2.key && pair1.value === pair2.value;
  }
  let p1: Pair<number, string> = new Pair(1, 'Apple');
  let p2 = new Pair(1, 'Orange');
  console.log(compare<number, string>(p1, p2));
  console.log(compare(p1, p2));
}
