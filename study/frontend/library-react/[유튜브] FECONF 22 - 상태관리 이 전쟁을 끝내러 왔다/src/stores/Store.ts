// 스토어에 대한 추상 클래스
export default abstract class Store<Snapshot> {
  protected listeners = new Set<() => void>();
  protected snapshot = {} as Snapshot;

  addListener(listener: () => void) {
    this.listeners.add(listener);
  }

  removeListener(listener: () => void) {
    this.listeners.delete(listener);
  }

  getSnapshot() {
    return this.snapshot;
  }

  publish() {
    this.listeners.forEach((listener) => listener());
  }
}
