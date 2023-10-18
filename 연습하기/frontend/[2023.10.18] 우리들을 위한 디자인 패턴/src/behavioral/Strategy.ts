// 상황에 따라 알고리즘 또는 전략을 전환할 수 있도록 해주는 패턴
namespace Strategy {
  interface SortStrategy {
    sort(dataset: number[]): number[];
  }

  class BubbleSortStrategy implements SortStrategy {
    sort(dataset: number[]): number[] {
      console.log('버블 정렬을 사용하여 정렬합니다.');
      // 정렬을 수행합니다.

      return dataset;
    }
  }

  class QuickSortStrategy implements SortStrategy {
    sort(dataset: number[]): number[] {
      console.log('퀵 정렬을 사용하여 정렬합니다.');
      // 정렬을 수행합니다.

      return dataset;
    }
  }

  class Sorter {
    protected sorterSmall: SortStrategy;
    protected sorterBig: SortStrategy;

    constructor(sorterSmall: SortStrategy, sorterBig: SortStrategy) {
      this.sorterSmall = sorterSmall;
      this.sorterBig = sorterBig;
    }

    sort(dataset: number[]): number[] {
      if (dataset.length > 5) {
        return this.sorterBig.sort(dataset);
      } else {
        return this.sorterSmall.sort(dataset);
      }
    }
  }

  const smallDataset = [1, 2, 3, 4, 5];
  const bigDataset = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sorter = new Sorter(new BubbleSortStrategy(), new QuickSortStrategy());

  sorter.sort(smallDataset);
  sorter.sort(bigDataset);
}
