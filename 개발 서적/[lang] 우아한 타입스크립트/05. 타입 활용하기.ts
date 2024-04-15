namespace ch05 {
  // 조건부 타입
  interface Bank {}

  interface Card {}

  type PayMethod<T> = T extends 'bank' ? Bank : Card;
  type CardPayMethodType = PayMethod<'card'>;

  // 타입 추론
  type UnpackPromise<T> = T extends Promise<infer K>[] ? K : any;

  const promises = [Promise.resolve('Mark'), Promise.resolve(38)];
  type Expected = UnpackPromise<typeof promises>; // string | number

  // 배민 어드민 서비스 실무 예제
  interface ComponentType {}

  type PermissionName = '기기 정보 관리' | '안전모 인증 관리' | '운행 여부 조회';

  interface RouteBase {
    name: string;
    path: string;
    component: ComponentType;
  }

  type RouteItem =
    | {
        name: string;
        path: string;
        component?: ComponentType;
        pages?: RouteBase[];
      }
    | {
        name: PermissionName;
        path: string;
        component?: ComponentType;
      };

  const routes: RouteItem[] = [
    {
      name: '기기 관리',
      path: '/device-history',
      component: {},
    },
    {
      name: '헬맷 인증 관리',
      path: '/helmet-certification',
      component: {},
    },
  ];

  interface SubMenu {
    name: string;
    path: string;
  }

  interface MainMenu {
    name: string;
    path?: string;
    subMenus?: ReadonlyArray<SubMenu>;
  }

  type MenuItem = MainMenu | SubMenu;

  const menuList: MenuItem[] = [
    {
      name: '계정 관리',
      subMenus: [
        { name: '기기 내역 관리', path: '/device-history' },
        { name: '헬맷 인증 관리', path: '/helmet-certification' },
      ],
    },
    {
      name: '운행 관리',
      path: '/operation',
    },
  ] as const;

  type UnpackMenuNames<T extends ReadonlyArray<MenuItem>> = T extends ReadonlyArray<infer U>
    ? U extends MainMenu
      ? U['subMenus'] extends infer V
        ? V extends ReadonlyArray<SubMenu>
          ? UnpackMenuNames<V>
          : U['name']
        : never
      : U extends SubMenu
      ? U['name']
      : never
    : never;

  type PermissionNames = UnpackMenuNames<typeof menuList>;

  type Vertical = 'top' | 'bottom';
  type Horizontal = 'left' | 'right';
  type Direction = Vertical | `${Vertical}${Capitalize<Horizontal>}`;

  type Card2 = {
    card: string;
  };

  type Account = {
    account: string;
  };

  function withdraw(type: Card2 | Account) {}

  // 식별된 유니온 타입을 사용하면 되지만, 매번 type을 추가해야 하는 번거로움이 있다.
  // withdraw({ type: 'account', account: '' });

  type PickOne<T> = {
    // 실제 사용하는 타입을 제외하고 나머지는 undefined로 만든다.
    [P in keyof T]: Record<P, T[P]> & Partial<Record<Exclude<keyof T, P>, undefined>>;
  }[keyof T];

  const pickOne1: PickOne<Card2> = { card: '현대' };

  type One<T> = {
    [P in keyof T]: Record<P, T[P]>;
  }[keyof T];

  const one: One<Card2> = { card: 'zzz' };

  type NonNullable<T> = T extends null | undefined ? never : T;

  function NonNullable<T>(value: T): value is NonNullable<T> {
    return value !== null && value !== undefined;
  }

  const colors = {
    black: '#000',
    white: '#fff',
    gray: '#ccc',
  };

  const theme = {
    colors: {
      default: colors.gray,
      ...colors,
    },
    backgroundColor: {
      default: colors.white,
      gray: colors.gray,
      black: colors.black,
    },
    fontSize: {
      default: 16,
      small: 14,
      large: 18,
    },
  };

  type ColorType = keyof typeof theme.colors;
  type BackgroundColorType = keyof typeof theme.backgroundColor;
  type FontSizeType = keyof typeof theme.fontSize;

  type Category = string;

  type PartialRecord<K extends string, T> = Partial<Record<K, T>>;

  interface Food {
    name: string;
  }

  const foodByCategory: PartialRecord<Category, Food[]> = {
    한식: [{ name: '김치찌개' }, { name: '비빔밥' }],
    일식: [{ name: '초밥' }, { name: '라멘' }],
  };

  foodByCategory['한식']?.forEach((food) => console.log(food.name));
}
