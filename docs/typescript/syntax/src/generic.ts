// Generic을 사용하게 되면 의존성이 낮아짐
// Generic도 Default Parameter 가능 (T = {}) 이런 식
interface IComparator<T> {
  compareTo(value: T): number;
}

class Rectangle implements IComparator<Rectangle> {
  constructor(private width: number, private height: number) {}
  compareTo(value: Rectangle): number {
    return this.width * this.height - value.width * value.height;
  }
}

class Programmer implements IComparator<Programmer> {
  constructor(private salary: number) {}
  compareTo(value: Programmer): number {
    return this.salary - value.salary;
  }
}

const rect1 = new Rectangle(2, 5);
const rect2 = new Rectangle(2, 3);

rect1.compareTo(rect2) > 0
  ? console.log('rect1 is bigger')
  : console.log('rect2 is bigger or equal');

class Pair<K, V> {
  constructor(public key: K, public value: V) {}
}

function compare<K, V>(pair1: Pair<K, V>, pair2: Pair<K, V>) {
  return pair1.key === pair2.key && pair1.value === pair2.value;
}
