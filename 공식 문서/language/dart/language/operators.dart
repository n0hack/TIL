void main(List<String> args) {
  var b;
  // b가 null인 경우 10 할당
  b ??= 10;
  print(b);

  // null 병합 연산자
  String playerName(String? name) => name ?? "Guest";

  print(playerName(null));

  // Cascade Notation
  // 동일한 객체에 대해 연속으로 참조하는 문법
  var obj = {'title': 'hi'}..['title'] = "test";

  print(obj);
}
