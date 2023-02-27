import Cart from './Cart';

// BDD 방법론
const context = describe;

describe('Cart', () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  context('when there is no same product', () => {
    it('adds an item', () => {
      cart = cart.addItem({ productId: 1, quantity: 1 });
      expect(cart.items).toHaveLength(1);
      cart = cart.addItem({ productId: 2, quantity: 1 });
      expect(cart.items).toHaveLength(2);
    });
  });

  context('when there is the same product', () => {
    it('adds an itemz', () => {
      cart = cart.addItem({ productId: 1, quantity: 1 });
      expect(cart.items).toHaveLength(1);
      cart = cart.addItem({ productId: 2, quantity: 1 });
      expect(cart.items).toHaveLength(2);
    });
  });
});
