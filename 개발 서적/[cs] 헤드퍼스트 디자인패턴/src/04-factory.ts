abstract class Pizza {
  abstract name: string;
  abstract dough: string;
  abstract sauce: string;
  abstract toppings: string[];

  prepare() {
    console.log(`${this.name} 준비 중...`);
    console.log('도우를 돌리는 중');
    console.log('소스를 뿌리는 중');
    console.log('토핑을 올리는 중: ');

    this.toppings.forEach(console.log);
  }

  bake() {
    console.log('175도에서 25분간 굽기');
  }

  cut() {
    console.log('피자를 사선으로 자르기');
  }

  box() {
    console.log('상자에 피자 담기');
  }

  getName() {
    return this.name;
  }
}

abstract class PizzaStore {
  orderPizza(type: string): Pizza {
    const pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  abstract createPizza(type: string): Pizza;
}

class NYPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    return new NYStyleCheesePizza();
  }
}

class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    return new ChicagoStyleCheesePizza();
  }
}

class NYStyleCheesePizza extends Pizza {
  name = '뉴욕 스타일 소스와 치즈 피자';
  dough = '씬 크러스트 도우';
  sauce = '마리나라 소스';
  toppings = ['잘게 썬 레지아노 치즈'];
}

class ChicagoStyleCheesePizza extends Pizza {
  name = '시카고 스타일 딥 디쉬 치즈 피자';
  dough = '아주 두꺼운 크러스트 도우';
  sauce = '플럼토마토 소스';
  toppings = ['잘게 조각낸 모짜렐라 치즈'];

  cut() {
    console.log('네모난 모양으로 피자 자르기');
  }
}

const nyStore = new NYPizzaStore();
const chicagoStore = new ChicagoPizzaStore();

let pizza = nyStore.orderPizza('cheese');
console.log(`Lucid가 주문한 피자는 ${pizza.getName()}`);

pizza = chicagoStore.orderPizza('cheese');
console.log(`Lucid가 주문한 피자는 ${pizza.getName()}`);
