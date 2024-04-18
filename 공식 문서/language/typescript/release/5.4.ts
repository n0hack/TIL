namespace Release_5_4 {
  function createStreetLight01<C extends string>(colors: C[], defaultColor?: C) {}

  // 실제 존재하지 않는 값이라 하더라도 컴파일 에러가 발생하지 않는다.
  createStreetLight01(['red', 'yellow', 'green'], 'pine');

  function createStreetLight02<C extends string, D extends C>(colors: C[], defaultColor?: D) {}

  // 존재하지 않는 값을 사용하면, 컴파일 에러가 발생한다.
  createStreetLight02(['red', 'yellow', 'green'], 'red');

  // 위와 같은 상황을 위해 NoInfer<T> 유틸리티 타입이 추가되었다.
  function createStreetLight03<C extends string>(colors: C[], defaultColor?: NoInfer<C>) {}

  // 존재하지 않는 값을 사용하면, 컴파일 에러가 발생한다.
  createStreetLight03(['red', 'yellow', 'green'], 'red');
}
