export default class Component<State = {}, Props = {}> {
  protected $target: HTMLElement;
  protected state: State;
  protected props?: Props;

  constructor($target: HTMLElement, props?: Props) {
    this.$target = $target;
    this.props = props;
    this.setup();
    this.setEvent();
    this.render();
  }

  setup() {}

  // 렌더링 이후의 동작 정의
  mounted() {}

  template() {
    return '';
  }

  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }

  setEvent() {}

  setState(newState: Partial<State>) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  addEvent<T extends keyof HTMLElementEventMap>(
    type: T,
    selector: string,
    callback: (event: HTMLElementEventMap[T]) => void,
  ) {
    this.$target.addEventListener(type, (event) => {
      const target = event.target as HTMLElement;

      if (!target.matches(selector)) return false;
      callback(event);
    });
  }
}
