namespace DRY {
  // 타입 중복은 코드 중복만큼 많은 문제를 발생시킴
  interface Person {
    firstName: string;
    lastName: string;
  }

  interface PersonWithBirthDate {
    firstName: string;
    lastName: string;
    birth: Date;
  }

  // 타입 별칭을 사용해 중복 제거 가능
  // function distance(a: { x: number; y: number }, b: { x: number; y: number }) {
  //   return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
  // }
  interface Point2D {
    x: number;
    y: number;
  }
  function distance(a: Point2D, b: Point2D) {
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
  }

  interface State {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
    pageContents: string;
  }

  type TopNavState1 = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>;
  type TopNavState2 = {
    [key in 'userId' | 'pageTitle' | 'recentFiles']: State[key];
  };

  type Pick<T, K extends keyof T> = {
    [k in K]: T[K];
  };

  // DRY 원칙은 Type에도 최대한 적용해야 함
  type MyType<T> = T extends infer R ? R : null;
  const Test: MyType<string> = '';
}
