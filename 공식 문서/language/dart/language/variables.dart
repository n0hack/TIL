late String description;

void main() {
  // 최상위 변수나 클래스 필드는 지연 초기화되어, 실제 사용할 때 초기화 됨
  int lineCount;

  lineCount = 10;
  print(lineCount);

  description = "Hello, Dart!";
  print(description);

  // 초기화 비용이 큰 경우 지연 초기화를 사용하는 것이 좋음
  // late String test = readThermometer();

  // non-binding
  for (final _ in Iterable.generate(5)) {
    print('Hello');
  }
}
