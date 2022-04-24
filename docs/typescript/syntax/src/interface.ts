// 추상 클래스는 상속받아 일부를 구현함에 목적이 있고,
// 인터페이스는 함수 및 메소드 구현을 강제함
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

// Mockup
class MockProductService implements IProductService {
  getProducts(): Product[] {
    return [];
  }
  getProductById(id: number): Product {
    return { id: 123, description: 'Good product' };
  }
}

// 팩토리 함수 (비즈니스 로직을 구현하고, 인스턴스 반환)
function getProductService(isProduction: boolean): IProductService {
  if (isProduction) {
    return new ProductService();
  } else {
    return new MockProductService();
  }
}

// 인터페이스로 타입 단언
const isProd = true;
const productService: IProductService = getProductService(isProd);

const products = productService.getProducts();
console.log(products);
