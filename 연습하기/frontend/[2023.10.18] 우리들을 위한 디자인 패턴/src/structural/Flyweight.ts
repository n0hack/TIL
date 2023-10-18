// 유사한 객체와 최대한 많은 것을 공유함으로써, 메모리 사용량이나 계산 비용을 최소화할 때 사용하는 패턴
namespace Flyweight {
  class KarakTea {}

  class TeaMaker {
    protected availableTea: Map<string, KarakTea> = new Map();

    public make(preference: string): KarakTea {
      if (!this.availableTea.has(preference)) {
        this.availableTea.set(preference, new KarakTea());
      }

      return this.availableTea.get(preference)!;
    }
  }

  class TeaShop {
    protected orders: Map<number, KarakTea> = new Map();
    protected teaMaker: TeaMaker;

    constructor(teaMaker: TeaMaker) {
      this.teaMaker = teaMaker;
    }

    public takeOrder(teaType: string, table: number): void {
      this.orders.set(table, this.teaMaker.make(teaType));
    }

    public serve(): void {
      this.orders.forEach((tea, table) => {
        console.log(`Serving tea to table## ${table}`);
      });
    }
  }

  const teaMaker = new TeaMaker();
  const shop = new TeaShop(teaMaker);

  shop.takeOrder('less sugar', 1);
  shop.takeOrder('more milk', 2);
  shop.takeOrder('without sugar', 5);

  shop.serve();
}
