// 정확히 하나의 객체만 필요한 경우 사용할 수 있지만, 전역 변수를 사용하는 것과 동일한 문제로 인해 안티 패턴으로 간주됨
namespace Singleton {
  class President {
    private static instance: President;

    private constructor() {}

    public static getInstance(): President {
      if (!President.instance) {
        President.instance = new President();
      }

      return President.instance;
    }

    private clone(): void {}

    private wakeup(): void {}
  }

  const president1 = President.getInstance();
  const president2 = President.getInstance();

  console.log(president1 === president2);
}
