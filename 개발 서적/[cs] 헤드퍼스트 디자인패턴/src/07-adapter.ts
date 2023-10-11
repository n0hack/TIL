// NOTE
// 어댑터 패턴: 서로 다른 인터페이스를 연결하기 위해 사용하는 패턴
// 퍼사드 패턴: 복잡한 서브시스템을 간단하게 사용할 수 있도록 인터페이스를 제공하는 패턴

namespace Adapter {
  interface Duck {
    quack(): void;
    fly(): void;
  }

  interface Turkey {
    gobble(): void;
    fly(): void;
  }

  class MallardDuck implements Duck {
    quack(): void {
      console.log('꽥');
    }
    fly(): void {
      console.log('날고 있어요!');
    }
  }

  class WildTurkey implements Turkey {
    gobble(): void {
      console.log('골골');
    }
    fly(): void {
      console.log('짧은 거리를 날고 있어요!');
    }
  }

  class TurkeyAdapter implements Duck {
    constructor(private turkey: Turkey) {}

    quack(): void {
      this.turkey.gobble();
    }

    fly(): void {
      for (let i = 0; i < 5; i++) {
        this.turkey.fly();
      }
    }
  }

  function testDuck(duck: Duck) {
    duck.quack();
    duck.fly();
  }

  const duck = new MallardDuck();
  const turkey = new WildTurkey();
  const turkeyAdapter = new TurkeyAdapter(turkey);

  console.log('칠면조가 말하길');
  turkey.gobble();
  turkey.fly();

  console.log('\n오리가 말하길');
  duck.quack();
  duck.fly();

  console.log('\n칠면조 어댑터가 말하길');
  testDuck(turkeyAdapter);
}
