abstract class Beverage {
  description = '제목없음';

  getDescription() {
    return this.description;
  }

  abstract cost(): number;
}

// 데코레이터
abstract class CondimentDecorator extends Beverage {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  abstract getDescription(): string;
}

// 음료
class Espresso extends Beverage {
  constructor() {
    super();
    this.description = '에스프레소';
  }

  cost() {
    return 1.99;
  }
}

class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = '하우스 블렌드 커피';
  }

  cost() {
    return 0.89;
  }
}

// 첨가물
class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  getDescription() {
    return this.beverage.getDescription() + ', 모카';
  }

  cost() {
    return 0.2 + this.beverage.cost();
  }
}

const beverage = new Espresso();
console.log(beverage.getDescription() + ' $' + beverage.cost());

let beverage2 = new HouseBlend();
beverage2 = new Mocha(beverage2);
beverage2 = new Mocha(beverage2);
beverage2 = new Mocha(beverage2);
console.log(beverage2.getDescription() + ' $' + beverage2.cost());
