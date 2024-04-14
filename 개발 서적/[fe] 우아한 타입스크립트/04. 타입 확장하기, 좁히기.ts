namespace ch04 {
  // 유니온 타입 & 교차 타입
  type IdType = string | number;
  type Numeric = number | boolean;

  type Universal = IdType & Numeric; // number

  // 타입 확장 실무 예제
  // 목적에 따라 타입을 확장해서 사용하는 것이 좋다. (유지보수성, 가독성)
  interface Menu {
    name: string;
    image: string;
  }

  interface SpecialMenu extends Menu {
    gif: string;
  }

  interface PackageMenu extends Menu {
    text: string;
  }

  // 타입 좁히기 실무 예제
  // type TextError = {
  //   errorCode: string;
  //   errorMessage: string;
  // };

  // type ToastError = {
  //   errorCode: number;
  //   errorMessage: string;
  //   toastShowDuration: number; // 토스트를 보여줄 시간
  // };

  // type AlertError = {
  //   errorCode: number;
  //   errorMessage: string;
  //   onConfirm: () => void; // 확인 버튼 클릭 시 실행할 함수
  // };

  // type ErrorFeedbackType = TextError | ToastError | AlertError;

  // const errorArr: ErrorFeedbackType[] = [
  //   { errorCode: '100', errorMessage: '텍스트 에러' },
  //   { errorCode: '200', errorMessage: '토스트 에러', toastShowDuration: 3000 },
  //   { errorCode: '300', errorMessage: '얼럿 에러', onConfirm: () => {} },
  //   { errorCode: '9999', errorMessage: '잘못된 에러', onConfirm: () => {}, toastShowDuration: 3000 }, // 덕 타이핑으로 인해 문제가 발생하지 않는다.
  // ];

  // 위를 해결하기 위해서는 식별자를 만든 후 유니온을 진행한다.
  type TextError = {
    errorType: 'TEXT';
    errorCode: string;
    errorMessage: string;
  };

  type ToastError = {
    errorType: 'TOAST';
    errorCode: string;
    errorMessage: string;
    toastShowDuration: number; // 토스트를 보여줄 시간
  };

  type AlertError = {
    errorType: 'ALERT';
    errorCode: string;
    errorMessage: string;
    onConfirm: () => void; // 확인 버튼 클릭 시 실행할 함수
  };

  type ErrorFeedbackType = TextError | ToastError | AlertError;

  const errorArr: ErrorFeedbackType[] = [
    { errorType: 'TEXT', errorCode: '100', errorMessage: '텍스트 에러' },
    { errorType: 'TOAST', errorCode: '200', errorMessage: '토스트 에러', toastShowDuration: 3000 },
    { errorType: 'ALERT', errorCode: '300', errorMessage: '얼럿 에러', onConfirm: () => {} },
    // { errorType: 'TEXT', errorCode: '9999', errorMessage: '잘못된 에러', onConfirm: () => {}, toastShowDuration: 3000 },
  ];

  // Exhaustiveness Checking (모든 케이스에 대한 타입 분기 처리를 강제하는 기능)
  type ProductPrice = '1000' | '2000' | '3000';

  const getProductName = (productPrice: ProductPrice): string => {
    if (productPrice === '1000') return '배민상품권 1000원';
    else if (productPrice === '2000') return '배민상품권 2000원';
    else if (productPrice === '3000') return '배민상품권 3000원';
    else {
      // 하나라도 분기 처리를 잊은 케이스가 있다면, 아래 코드에서 에러가 발생하게 된다.
      exhaustiveCheck(productPrice);
      return '배민상품권';
    }
  };

  const exhaustiveCheck = (param: never) => {
    throw new Error('type error!');
  };
}
