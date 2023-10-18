// 여러 단계에 걸쳐 복잡한 객체를 생성할 때 사용하는 패턴
class Burger {
  private size: number;
  private cheese: boolean;
  private pepperoni: boolean;
  private lettuce: boolean;
  private tomato: boolean;

  constructor(builder: BurgerBuilder) {
    this.size = builder.size;
    this.cheese = builder.cheese;
    this.pepperoni = builder.pepperoni;
    this.lettuce = builder.lettuce;
    this.tomato = builder.tomato;
  }
}

class BurgerBuilder {
  size: number;
  cheese: boolean;
  pepperoni: boolean;
  lettuce: boolean;
  tomato: boolean;

  constructor(size: number) {
    this.size = size;
    this.cheese = false;
    this.pepperoni = false;
    this.lettuce = false;
    this.tomato = false;
  }

  addPepperoni() {
    this.pepperoni = true;
    return this;
  }

  addLettuce() {
    this.lettuce = true;
    return this;
  }

  addCheese() {
    this.cheese = true;
    return this;
  }

  addTomato() {
    this.tomato = true;
    return this;
  }

  build() {
    return new Burger(this);
  }
}

const burger = new BurgerBuilder(14).addPepperoni().addLettuce().addTomato().build();
