// 옵저버 패턴은 옵저버를 통해 구독 상태를 관리하며, 상태 변화를 관찰해 일련의 동작을 수행하는 패턴임
class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(f) {
    this.observers.push(f);
  }

  unsubscribe(f) {
    this.observers = this.observers.filter((subscriber) => subscriber !== f);
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

export default new Observable();
