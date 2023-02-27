import Cart from '../models/Cart';
import Item from '../models/Item';
import Store from './Store';

export type CartStoreSnapshot = {
  items: Item[];
};

export default class CartStore extends Store<CartStoreSnapshot> {
  private cart = new Cart();

  constructor() {
    super();
    this.takeSnapshot();
  }

  addItem({ productId, quantity }: { productId: number; quantity: number }) {
    this.cart = this.cart.addItem({ productId, quantity });

    // 상태를 저장하고
    // 변경을 알린다
    this.update();
  }

  update() {
    this.takeSnapshot();
    this.publish();
  }

  takeSnapshot() {
    this.snapshot = {
      items: this.cart.items,
    };
  }
}
