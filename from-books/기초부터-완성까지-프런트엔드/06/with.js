// with로 생성된 객체 환경 레코드는
// Binding Object를 암묵적으로 제공하므로
// 블록 내에서 프로퍼티에 바로 접근 가능
with (Math) {
  // 원래는 Math.pow(2, 2);
  console.log(pow(2, 2));
}
