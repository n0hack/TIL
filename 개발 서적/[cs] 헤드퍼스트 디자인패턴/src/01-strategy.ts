interface FlyBehavior {
  fly(): void;
}

interface QuackBehavior {
  quack(): void;
}

// Duck을 건들지 않고, 변경될 수 있는 부분만 분리하여 변경
abstract class Duck {
  private flyBehavior: FlyBehavior;
  private quackBehavior: QuackBehavior;

  constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior) {
    this.flyBehavior = flyBehavior;
    this.quackBehavior = quackBehavior;
  }

  public abstract display(): void;
  public swim = () => console.log('모든 오리는 물에 뜹니다. 가짜 오리도 뜨죠');
  public performFly = () => this.flyBehavior.fly();
  public performQuack = () => this.quackBehavior.quack();
  public setFlyBehavior = (fb: FlyBehavior) => (this.flyBehavior = fb);
  public setQuackBehavior = (qb: QuackBehavior) => (this.quackBehavior = qb);
}

class FlyWithWings implements FlyBehavior {
  fly() {
    console.log('FlyWithWings fly');
  }
}

class FlyNoWay implements FlyBehavior {
  fly() {
    console.log('FlyNoWay fly');
  }
}

class FlyRocketPowered implements FlyBehavior {
  fly() {
    console.log('로켓 추진으로 날아갑니다!');
  }
}

class Quack implements QuackBehavior {
  quack() {
    console.log('Quack quack');
  }
}

class MuteQuack implements QuackBehavior {
  quack() {
    console.log('MuteQuack quack');
  }
}

class Squeak implements QuackBehavior {
  quack() {
    console.log('Squeak quack');
  }
}

class MallardDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Quack());
  }

  display() {
    console.log('저는 물오리입니다.');
  }
}

class RedheadDuck extends Duck {
  display() {
    console.log('RedheadDuck display');
  }
}

class RubberDuck extends Duck {
  display() {
    console.log('RubberDuck display');
  }
}

const mallardDuck = new MallardDuck();
// const redheadDuck = new RedheadDuck();

mallardDuck.display();
mallardDuck.performQuack();
// redheadDuck.display();

class ModelDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new Quack());
  }

  public display(): void {
    console.log('저는 모형 오리입니다.');
  }
}

const model = new ModelDuck();
model.performFly();
// Setter를 통해 동적으로 동작 변경
model.setFlyBehavior(new FlyRocketPowered());
model.performFly();
