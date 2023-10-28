import ItemAppender from './components/ItemAppender';
import ItemFilter from './components/ItemFilter';
import Items from './components/Items';
import Component from './core/Component';

export type Item = {
  id: number;
  content: string;
  active: boolean;
};

type State = {
  isFilter: number;
  items: Item[];
};

export default class App extends Component<State> {
  setup() {
    this.state = {
      isFilter: 0,
      items: [
        {
          id: 1,
          content: 'item1',
          active: true,
        },
        {
          id: 2,
          content: 'item2',
          active: false,
        },
        {
          id: 3,
          content: 'item3',
          active: false,
        },
        {
          id: 4,
          content: 'item4',
          active: false,
        },
      ],
    };
  }

  // 자식 컴포넌트 마운트
  mounted() {
    const { filteredItems, addItem, deleteItem, toggleItem, filterItem } = this;
    const $itemAppender = this.$target.querySelector('[data-component="item-appender"]') as HTMLElement;
    const $items = this.$target.querySelector('[data-component="items"]') as HTMLElement;
    const $itemFilter = this.$target.querySelector('[data-component="item-filter"]') as HTMLElement;

    new ItemAppender($itemAppender, {
      addItem: addItem.bind(this),
    });

    new Items($items, {
      filteredItems,
      deleteItem: deleteItem.bind(this),
      toggleItem: toggleItem.bind(this),
    });

    new ItemFilter($itemFilter, {
      filterItem: filterItem.bind(this),
    });
  }

  template(): string {
    return `
      <header data-component="item-appender"></header>
      <main data-component="items"></main>
      <footer data-component="item-filter"></footer>
    `;
  }

  get filteredItems() {
    const { isFilter, items } = this.state;
    return items.filter(({ active }) => (isFilter === 1 && active) || (isFilter === 2 && !active) || isFilter === 0);
  }

  addItem(content: string) {
    const { items } = this.state;
    const newItem = { id: Math.max(...items.map((item) => item.id)) + 1, content, active: false };

    this.setState({ items: [...items, newItem] });
  }

  deleteItem(id: number) {
    const { items } = this.state;
    this.setState({ items: items.filter((item) => item.id !== id) });
  }

  toggleItem(id: number) {
    const { items } = this.state;
    this.setState({ items: items.map((item) => (item.id === id ? { ...item, active: !item.active } : item)) });
  }

  filterItem(isFilter: number) {
    this.setState({ isFilter });
  }
}
