// 엔티티의 기능을 동적으로 확장할 수 있게 해주는 패턴
namespace Decorator {
  interface Coffee {
    getCost(): number;
    getDescription(): string;
  }

  class SimpleCoffee implements Coffee {
    getCost(): number {
      return 10;
    }

    getDescription(): string {
      return 'Simple coffee';
    }
  }

  class MilkCoffee implements Coffee {
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
      this.coffee = coffee;
    }

    getCost(): number {
      return this.coffee.getCost() + 2;
    }

    getDescription(): string {
      return this.coffee.getDescription() + ', milk';
    }
  }

  class WhipCoffee implements Coffee {
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
      this.coffee = coffee;
    }

    getCost(): number {
      return this.coffee.getCost() + 5;
    }

    getDescription(): string {
      return this.coffee.getDescription() + ', whip';
    }
  }

  let someCoffee = new SimpleCoffee();
  console.log(someCoffee.getCost());
  console.log(someCoffee.getDescription());

  someCoffee = new MilkCoffee(someCoffee);
  console.log(someCoffee.getCost());
  console.log(someCoffee.getDescription());

  someCoffee = new WhipCoffee(someCoffee);
  console.log(someCoffee.getCost());
  console.log(someCoffee.getDescription());
}
