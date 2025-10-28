class User {
  String _name;

  User(this._name);

  // Getter & Setter는 클래스 바깥의 top-level에서도 만들 수 있음
  String get name => _name;

  set name(String name) => _name = name;
}

void main(List<String> args) {
  print(args);

  // 익명 함수
  (() => print('Annoymous Function'))();

  // Getter & Setter
  // Dart는 클래스 인스턴스를 만들 때, new가 옵션임
  User user = User("NoHack");
  print(user.name);
}
