// 추상 클래스를 확장하여 더 구체적인 구현 가능
// 구현이 끝난 메서드가 담겨도 되지만, 추상 메서드도 내부에 둘 수 있음
/* abstract class Person3 {
  constructor(public name: string) {}
  changeAddress(newAddress: string) {
    console.log(`${newAddress}로 주소 변경 완료`);
  }

  giveDayOff() {
    console.log(`${this.name}에게 휴가 지급`);
  }

  promote(percent: number) {
    this.giveDayOff();
    this.increasePay(percent);
  }

  abstract increasePay(percent: number): void;
}

class Employee extends Person3 {
  increasePay(percent: number): void {
    console.log(`${this.name}의 급여를 ${percent}% 인상`);
  }
}

class Contractor extends Person3 {
  increasePay(percent: number): void {
    console.log(`${this.name}의 시급을 ${percent}% 인상`);
  }
}

const workers: Person3[] = [];
workers[0] = new Employee('Lily');
workers[1] = new Contractor('Stella');
workers.forEach((worker) => worker.promote(5));

// 추상 클래스를 확장하여 더 구체적인 구현 가능
// 구현이 끝난 메서드가 담겨도 되지만, 추상 메서드도 내부에 둘 수 있음
abstract class Person {
  constructor(public name: string) {}
  changeAddress(newAddress: string) {
    console.log(`${newAddress}로 주소 변경 완료`);
  }

  giveDayOff() {
    console.log(`${this.name}에게 휴가 지급`);
  }

  promote(percent: number) {
    this.giveDayOff();
    this.increasePay(percent);
  }

  abstract increasePay(percent: number): void;
}

class Employee extends Person {
  increasePay(percent: number): void {
    console.log(`${this.name}의 급여를 ${percent}% 인상`);
  }
}

class Contractor extends Person {
  increasePay(percent: number): void {
    console.log(`${this.name}의 시급을 ${percent}% 인상`);
  }
}

const workers: Person[] = [];
workers[0] = new Employee('Lily');
workers[1] = new Contractor('Stella');
workers.forEach((worker) => worker.promote(5)); */

// 오버로딩 = 시그니쳐를 미리 만들어 놓고, 구현부를 최하단 한 곳에 두기
interface Product {
  id: number;
  description: string;
}

class ProductService {
  getProducts(description: string): Product[];
  getProducts(id: number): Product;
  getProducts(product: number | string): Product[] | Product {
    if (typeof product === 'number') {
      console.log(`id: ${product} 상품 조회`);
      return { id: product, description: 'great product' };
    } else if (typeof product === 'string') {
      console.log(`desc: ${product} 상품 조회`);
      return [
        { id: 123, description: 'blue jeans' },
        { id: 456, description: 'blue jeans' },
      ];
    } else {
      return {
        id: -1,
        description:
          'Error: getProducts() 함수는 number | string 타입만 매개변수로 받습니다.',
      };
    }
  }
}
const prodService = new ProductService();
prodService.getProducts(123);
prodService.getProducts('blue jeans');

interface MotorVehicle {
  startEngine(): boolean;
  stopEngine(): boolean;
  brake(): boolean;
  accelerate(speed: number): void;
  hank(howLong: number): void;
}

interface Flyable {
  fly(howHigh: number): void;
  land(): void;
}

interface Swimmable {
  swim(howFar: number): void;
}

class Car implements MotorVehicle, Flyable, Swimmable {
  startEngine(): boolean {
    return true;
  }

  stopEngine(): boolean {
    return true;
  }

  brake(): boolean {
    return true;
  }

  accelerate(speed: number): void {
    console.log('Driving faster');
  }

  hank(howLong: number): void {
    console.log('Beep beep yeah!');
  }

  fly(howHigh: number): void {}

  land(): void {}

  swim(howFar: number): void {}
}

const car = new Car();
car.startEngine();
// 이 형태도 사용 가능하지만, 인터페이스부만 사용 가능한지, 추가 구현부도 사용한지 여부가 달라짐
// const car: MotorVehicle = new Car();

class SecretServiceCar extends Car implements Flyable, Swimmable {}

interface Product {
  id: number;
  description: string;
}

// 인터페이스를 만들어 두면 모킹 클래스를 구현할 때 편하게 사용할 수 있음
interface IProductService {
  getProducts(): Product[];
  getProductById(id: number): Product;
}
