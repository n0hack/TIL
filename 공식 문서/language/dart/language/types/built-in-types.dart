void main(List<String> args) {
  // num은 int와 double의 상위 타입
  num x = 123;

  var heart = '\u2665';

  // 자바스크립트의 typeof와 같은 역할
  print(heart.runtimeType);

  // symbol
  var radix = #radix;
  print(radix.runtimeType);
  print(radix);

  // 튜플
  (String, int) user = ('Jihoon', 25);
  print(user.runtimeType);
  print(user.$1);
  print(user.$2);

  // 레코드: 튜플과 유사한 불변 데이터 구조
  ({int age, String name}) record = (name: 'Jihoon', age: 25);
  print(record.runtimeType);
  print(record.name);
  print(record.age);
}
