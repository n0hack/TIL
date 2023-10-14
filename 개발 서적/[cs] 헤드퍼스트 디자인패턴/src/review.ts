namespace MVC {
  interface Quackable {
    quack(): void;
  }

  class MallardDuck implements Quackable {
    quack() {
      console.log('꽥꽥');
    }
  }

  class RedheadDuck implements Quackable {
    quack() {
      console.log('꽥꽥');
    }
  }

  class DuckCall implements Quackable {
    quack() {
      console.log('꽉꽉');
    }
  }

  class RubberDuck implements Quackable {
    quack() {
      console.log('삑삑');
    }
  }

  class Goose {
    honk() {
      console.log('끽끽');
    }
  }

  // 거위는 오리가 아니므로, 어댑터 필요
  class GooseAdapter implements Quackable {
    private goose: Goose;

    constructor(goose: Goose) {
      this.goose = goose;
    }

    quack() {
      this.goose.honk();
    }
  }

  // 꽥꽥 소리를 카운트하는 데코레이터
  class QuackCounter implements Quackable {
    private duck: Quackable;
    static numberOfQuacks = 0;

    constructor(duck: Quackable) {
      this.duck = duck;
    }

    quack() {
      this.duck.quack();
      QuackCounter.numberOfQuacks++;
    }

    static getQuacks() {
      return QuackCounter.numberOfQuacks;
    }
  }

  // 팩토리
  abstract class AbstractDuckFactory {
    abstract createMallardDuck(): Quackable;
    abstract createRedheadDuck(): Quackable;
    abstract createDuckCall(): Quackable;
    abstract createRubberDuck(): Quackable;
  }

  class DuckFactory extends AbstractDuckFactory {
    createMallardDuck(): Quackable {
      return new MallardDuck();
    }

    createRedheadDuck(): Quackable {
      return new RedheadDuck();
    }

    createDuckCall(): Quackable {
      return new DuckCall();
    }

    createRubberDuck(): Quackable {
      return new RubberDuck();
    }
  }

  class CountingDuckFactory extends AbstractDuckFactory {
    createMallardDuck(): Quackable {
      return new QuackCounter(new MallardDuck());
    }

    createRedheadDuck(): Quackable {
      return new QuackCounter(new RedheadDuck());
    }

    createDuckCall(): Quackable {
      return new QuackCounter(new DuckCall());
    }

    createRubberDuck(): Quackable {
      return new QuackCounter(new RubberDuck());
    }
  }

  // 오리 무리를 한 번에 관리하기 (컴포지트)
  class Flock implements Quackable {
    quackers: Quackable[] = [];

    add(quacker: Quackable) {
      this.quackers.push(quacker);
    }

    quack() {
      for (const quacker of this.quackers) {
        quacker.quack();
      }
    }
  }

  // 옵저버
  interface QuackObservable {
    registerObserver(observer: Observer): void;
    notifyObservers(): void;
  }

  interface Observer {
    update(duck: QuackObservable): void;
  }

  class Observable implements QuackObservable {
    observers: Observer[] = [];
    duck: QuackObservable;

    constructor(duck: QuackObservable) {
      this.duck = duck;
    }

    registerObserver(observer: Observer) {
      this.observers.push(observer);
    }

    notifyObservers() {
      for (const observer of this.observers) {
        observer.update(this.duck);
      }
    }
  }

  function simulate(duckFactory: AbstractDuckFactory) {
    const redheadDuck = duckFactory.createRedheadDuck();
    const duckCall = duckFactory.createDuckCall();
    const rubberDuck = duckFactory.createRubberDuck();
    const gooseDuck = new GooseAdapter(new Goose());

    console.log('오리 시뮬레이션 게임');

    const flockOfDucks = new Flock();
    flockOfDucks.add(redheadDuck);
    flockOfDucks.add(duckCall);
    flockOfDucks.add(rubberDuck);
    flockOfDucks.add(gooseDuck);

    const flockOfMallards = new Flock();

    const mallardOne = duckFactory.createMallardDuck();
    const mallardTwo = duckFactory.createMallardDuck();
    const mallardThree = duckFactory.createMallardDuck();
    const mallardFour = duckFactory.createMallardDuck();

    flockOfMallards.add(mallardOne);
    flockOfMallards.add(mallardTwo);
    flockOfMallards.add(mallardThree);
    flockOfMallards.add(mallardFour);

    flockOfDucks.add(flockOfMallards);

    simulateDuck(flockOfDucks);
    simulateDuck(flockOfMallards);

    console.log(`오리가 울은 횟수: ${QuackCounter.getQuacks()}`);
  }

  function simulateDuck(duck: Quackable) {
    duck.quack();
  }

  simulate(new CountingDuckFactory());
}
