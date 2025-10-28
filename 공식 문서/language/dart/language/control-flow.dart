void main(List<String> args) {
  // JavaScript의 var와 달리 클로저를 제대로 캡처함
  var fns = [];
  for (var i = 0; i < 2; i++) {
    fns.add(() => print(i));
  }
  fns.forEach((f) => f());

  // if-case: 특정 패턴일 때만 실행
  const pair = [1, 2];
  if (pair case [int a, int b]) {
    print("$a, $b");
  }

  // Switch
  const charCode = 'plus';

  final token = switch (charCode) {
    'plus' => 'PLUS',
    _ => throw FormatException("Invalid character"),
  };

  print(token);

  // guard 패턴
  final point = (1, 2);
  // dart는 break가 필요 없음 (빈 case는 자동으로 through)
  switch (point) {
    case (var x, var y) when x > 0 && y > 0:
      print("Q1");
    default:
      print("Not in Q1");
  }

  // 에러 핸들링
  // 특정 에러만 잡기
  void throwException() {
    throw OutOfMemoryError();
  }

  try {
    throwException();
  } on OutOfMemoryError catch (e, s) {
    // s = stack trace
    print('$e $s');
    // 다시 caller에게 에러 던지기
    rethrow;
  }
}
