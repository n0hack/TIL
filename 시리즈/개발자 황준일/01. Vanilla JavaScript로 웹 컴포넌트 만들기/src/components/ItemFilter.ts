import Component from '../core/Component';

type Props = {
  filterItem: (isFilter: number) => void;
};

export default class ItemFilter extends Component<{}, Props> {
  template() {
    return `
      <div class="filters">
        <button class="filterButton" data-is-filter="0">전체 보기</button>
        <button class="filterButton" data-is-filter="1">활성 보기</button>
        <button class="filterButton" data-is-filter="2">비활성 보기</button>
      </div>
    `;
  }

  setEvent() {
    const { filterItem } = this.props!;

    this.addEvent('click', '.filterButton', ({ target }) => {
      const isFilter = Number((target as HTMLElement).dataset.isFilter);
      filterItem(isFilter);
    });
  }
}
