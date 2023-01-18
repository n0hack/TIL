namespace ch03 {
  // 싱글톤
  class AppState {
    counter = 0;
    private static instanceRef: AppState;

    private constructor() {}

    static getInstance() {
      if (this.instanceRef === undefined) {
        this.instanceRef = new AppState();
      }
      return this.instanceRef;
    }
  }

  const appState1 = AppState.getInstance();
  const appState2 = AppState.getInstance();

  console.log(appState1 === appState2);
  console.log(++appState1.counter);
  console.log(++appState2.counter);

  // 인터페이스 프로그래밍
  // 인터페이스와 클래스는 목적부터 다름. (클래스 = 상속받아 확장, 기능 구현을 강제)
  interface Product {
    id: number;
    description: string;
  }

  interface IProductService {
    getProducts(): Product[];
    getProductById(id: number): Product;
  }

  class ProductService implements IProductService {
    getProducts(): Product[] {
      return [];
    }

    getProductById(id: number): Product {
      return { id: 123, description: 'Good product' };
    }
  }

  class MockProductService implements IProductService {
    getProducts(): Product[] {
      return [];
    }

    getProductById(id: number): Product {
      return { id: 456, description: 'Not a real product' };
    }
  }

  const productService = new ProductService();
  const products = productService.getProducts();

  // 팩토리 함수(비즈니스 로직을 구현하고, 인스턴스를 반환하는 함수)를 만들어 두면 편함
  function getProductService(isProd: boolean) {
    if (isProd) {
      return new ProductService();
    } else {
      return new MockProductService();
    }
  }

  const isProd = true;
  const productService2 = getProductService(isProd);
  const products2 = productService2.getProducts();
}
