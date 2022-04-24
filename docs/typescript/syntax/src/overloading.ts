class ProductService {
  // 오버로딩
  getProducts();
  getProducts(id: number);
  getProducts(id?: number) {
    if (typeof id === 'number') {
      console.log(`getting the product info for ${id}`);
    } else {
      console.log('getting all products');
    }
  }
}

const prodService = new ProductService();
prodService.getProducts(123);
prodService.getProducts();
