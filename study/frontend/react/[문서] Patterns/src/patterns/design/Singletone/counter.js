let instance;
let counter = 0;

// 단 한 번만 인스턴스화
class Counter {
  constructor() {
    if (instance) {
      throw new Error('You can only create one instance!');
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    console.log('increment:', counter);
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

// 이후 수정할 수 없도록 동결 처리
export default Object.freeze(new Counter());
