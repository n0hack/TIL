// 기존 객체와 유사하거나 복제에 비해 생성 비용이 큰 경우 사용하는 패턴
namespace Prototype {
  class Sheep {
    protected name: string;

    protected category: string;

    constructor(name: string, category: string = 'Mountain Sheep') {
      this.name = name;

      this.category = category;
    }

    setName(name: string): void {
      this.name = name;
    }

    getName(): string {
      return this.name;
    }

    setCategory(category: string): void {
      this.category = category;
    }

    getCategory(): string {
      return this.category;
    }
  }

  const original = new Sheep('Jolly');
  const cloned = Object.create(original);
  cloned.setName('Dolly');
}
