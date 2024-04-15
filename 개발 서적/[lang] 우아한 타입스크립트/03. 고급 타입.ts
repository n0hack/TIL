namespace ch03 {
  interface IndexSignature {
    [key: string]: boolean | number;
    isValid: boolean;
    // length: string; // Error: Type 'string' is not assignable to type 'number'.
  }

  type Example = {
    a: number;
    b: string;
    c: boolean;
  };

  type IndexedAccess1 = Example[keyof Example]; // number | string | boolean
  type IndexedAccess2 = Example['b']; // string

  const PromotionList = [
    { name: '사과', price: 1000 },
    { name: '바나나', price: 1500 },
    { name: '체리', price: 2000 },
  ];

  type ElementOf<T> = T extends (infer E)[] ? E : never;
  type PromotionItemType = ElementOf<typeof PromotionList>; // { name: string; price: number; }

  // Mapped 타입을 이용한 실무 예제
  const BottomSheetItem = {};

  const BottomSheetMap = {
    RECENT_CONTACTS: BottomSheetItem,
    CARD_SELECT: BottomSheetItem,
    STICKET: BottomSheetItem,
  };

  type BOTTOM_SHEET_ID = keyof typeof BottomSheetMap;

  type BottomSheetStore = {
    [index in BOTTOM_SHEET_ID]: {
      resolver?: (payload: any) => void;
      args?: any;
    };
  };

  // 만약 새로운 키 이름을 사용하고 싶다면 as를 사용할 수 있다.
  type BottomSheetStore2 = {
    [index in BOTTOM_SHEET_ID as `${index}_KEY`]: {
      resolver?: (payload: any) => void;
      args?: any;
    };
  };
}
