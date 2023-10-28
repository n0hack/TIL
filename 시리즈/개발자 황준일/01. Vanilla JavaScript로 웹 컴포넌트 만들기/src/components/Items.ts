import { Item } from '../App';
import Component from '../core/Component';

type Props = {
  filteredItems: Item[];
  toggleItem: (id: number) => void;
  deleteItem: (id: number) => void;
};

export default class Items extends Component<{}, Props> {
  template() {
    const { filteredItems } = this.props!;
    return `
      <ul>
      ${filteredItems
        .map(
          ({ id, content, active }) => `
        <li data-id="${id}">
          ${content}
          <button class="toggleBtn" style="color: ${active ? '#09F' : '#F09'}">
            ${active ? '활성' : '비활성'}
          </button>
          <button class="deleteBtn">삭제</button>
        </li>
      `,
        )
        .join('')}
      </ul>
      `;
  }

  setEvent() {
    // Event Delegation
    // this.$target.addEventListener('click', ({ target }) => {
    //   if (target instanceof HTMLButtonElement) {
    //     const { items } = this.state;
    //     if (target.classList.contains('appendButton')) {
    //       this.setState({ items: [...items, `item${items.length + 1}`] });
    //     }
    //     if (target.classList.contains('deleteButton')) {
    //       items.splice(Number(target.dataset.index), 1);
    //       this.setState({ items });
    //     }
    //   }
    // });

    // Event 추상화 (Component.ts)
    // this.addEvent('click', '.appendButton', () => {
    //   const { items } = this.state;
    //   this.setState({ items: [...items, `item${items.length + 1}`] });
    // });
    // this.addEvent('click', '.deleteButton', ({ target }) => {
    //   const { items } = this.state;
    //   items.splice(Number((target as HTMLButtonElement).dataset.index), 1);
    //   this.setState({ items });
    // });

    // Props 주입
    const { toggleItem, deleteItem } = this.props!;

    this.addEvent('click', '.toggleBtn', ({ target }) => {
      toggleItem(Number(((target as HTMLElement).closest('[data-id]') as HTMLElement).dataset.id));
    });

    this.addEvent('click', '.deleteBtn', ({ target }) => {
      deleteItem(Number(((target as HTMLElement).closest('[data-id]') as HTMLElement).dataset.id));
    });
  }
}
