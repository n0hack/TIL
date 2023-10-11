namespace TemplateMethod {
  abstract class CaffeineBeverage {
    prepareRecipe(): void {
      this.boilWater();
      this.brew();
      this.pourInCup();
      if (this.customerWantsCondiments()) {
        this.addCondiments();
      }
    }

    abstract brew(): void;
    abstract addCondiments(): void;

    boilWater(): void {
      console.log('물 끓이는 중');
    }

    pourInCup(): void {
      console.log('컵에 따르는 중');
    }

    customerWantsCondiments(): boolean {
      // Hook (중간에 끼어들 수 있음)
      return true;
    }
  }

  class Coffee extends CaffeineBeverage {
    brew(): void {
      console.log('필터를 통해서 커피를 우려내는 중');
    }

    addCondiments(): void {
      console.log('설탕과 우유를 추가하는 중');
    }

    customerWantsCondiments(): boolean {
      const answer = this.getUserInput();

      if (answer.toLowerCase().startsWith('y')) {
        return true;
      } else {
        return false;
      }
    }

    private getUserInput(): string {
      return 'y';
    }
  }

  class Tea extends CaffeineBeverage {
    brew(): void {
      console.log('차를 우려내는 중');
    }

    addCondiments(): void {
      console.log('레몬을 추가하는 중');
    }
  }

  const coffee = new Coffee();
  coffee.prepareRecipe();

  const tea = new Tea();
  tea.prepareRecipe();
}
