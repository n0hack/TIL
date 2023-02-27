import { useSyncExternalStore } from 'react';

import CartStore, { CartStoreSnapshot } from '../stores/CartStore';

const cartStore = new CartStore();

export default function useCartStore(): [CartStoreSnapshot, CartStore] {
  const snapshot = useSyncExternalStore(
    (onStoreChange) => {
      cartStore.addListener(onStoreChange);
      return () => cartStore.removeListener(onStoreChange);
    },
    // 상태를 가져올 수 있는 메소드
    () => cartStore.getSnapshot()
  );

  return [snapshot, cartStore];
}
