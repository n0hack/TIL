namespace ch02 {
  // 타입 단언보다는 선언 사용하기
  type Person = { name: string };

  const lucid: Person = { name: 'Lucid' };
  const nohack: Person = {} as Person; // 단언 시 에러 발생 x

  // DOM 조작과 같이 타입스크립트가 알지 못하는 범위에 대해서는 단언을 사용하는 것이 타당하다.
  document.querySelector('#myButton')?.addEventListener('click', (e) => {
    const button = e.currentTarget as HTMLButtonElement;
  });

  // 인터페이스는 타입과 다르게 선언 병합이 가능하다.
  interface IState {
    name: string;
    capital: string;
  }

  interface IState {
    population: number;
  }

  const state: IState = {
    name: 'Alabama',
    capital: 'Montgomery',
    population: 5000000,
  };

  interface State {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
    pageContents: string;
  }

  type TopNavStateKey = 'userId' | 'pageTitle' | 'recentFiles';

  type TopNavState = Pick<State, TopNavStateKey>;
}
