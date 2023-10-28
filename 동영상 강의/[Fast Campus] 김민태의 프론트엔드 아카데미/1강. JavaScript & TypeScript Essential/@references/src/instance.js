/* NOTE 프로토타입
  - 1. 자바스크립트는 프로토타입 기반 언어이며, class는 이에 대한 문법적 설탕이다.
  - 2. 일반 함수와 구분이 되지 않으며, 연관된 기능들이 바깥에 분리되어 있기에, 가독성 면에서 좋지 않다.
*/
function CartV1() {
  this.cart = [];
  this.currentId = 0;
}

// 프로토타입 메소드 (CartV1.prototype.getNewId)
CartV1.prototype.getNewId = function () {
  this.currentId++;
  return this.currentId;
};

// 정적 메소드 (CartV1.createItem)
CartV1.createItem = function (name, price) {
  return {
    name: price,
  };
};

CartV1.prototype.addItem = function (item) {
  this.cart.push({
    ...item,
    id: this.getNewId(),
  });
};

// new를 사용하지 않으면, this가 window를 가리키게 된다. (실행 컨텍스트 메커니즘)
const shoppingCardV1 = new CartV1();

shoppingCardV1.addItem(CartV1.createItem('수박', 8000));
shoppingCardV1.addItem(CartV1.createItem('사과', 12000));
shoppingCardV1.addItem(CartV1.createItem('두부', 2000));
