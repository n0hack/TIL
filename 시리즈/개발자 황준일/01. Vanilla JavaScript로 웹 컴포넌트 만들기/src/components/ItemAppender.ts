import Component from '../core/Component';

type Props = {
  addItem: (content: string) => void;
};

export default class ItemAppender extends Component<{}, Props> {
  template() {
    return `<input type="text" class="appender" placeholder="아이템 내용 입력" />`;
  }

  setEvent() {
    const { addItem } = this.props!;

    this.addEvent('keyup', '.appender', ({ key, target }) => {
      if (key !== 'Enter') return;
      const content = (target as HTMLInputElement).value;
      addItem(content);
    });
  }
}
