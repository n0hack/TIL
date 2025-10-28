class Point {
  double x;
  double y;

  // 기본 생성자
  Point(this.x, this.y);

  // Named Constructor - 목적이 있는 경우
  Point.origin() : x = 0, y = 0;
}

// 객체가 절대 변하지 않을 것이라면, const 생성자를 사용해 만들 수 있음
class ImmutablePoint {
  final double x, y;

  const ImmutablePoint(this.x, this.y);
}

class Logger {
  final String name;
  bool mute = false;

  static final Map<String, Logger> _cache = <String, Logger>{};

  // Factory는 객체가 만들어지기 전에 실행되므로, this가 존재하지 않아 사용할 수 없음
  // Constructor가 아닌, 인스턴스를 반환하는 함수
  factory Logger(String name) {
    return _cache.putIfAbsent(name, () => Logger._internal(name));
  }

  factory Logger.fromJson(Map<String, Object> json) {
    return Logger(json['name'].toString());
  }

  Logger._internal(this.name);

  void log(String msg) {
    // 이름 충돌이 없기 때문에 암묵적으로 this.mute를 mute로 사용 가능
    if (!mute) {
      print(msg);
    }
  }
}

// Mixin
// 상속 불가, with를 통해 다중적용 가능
// mixin과 class를 함께 사용 가능 mixin class

// Interface는 다형성을 구현하기 위해 규칙만 제공, Mixin은 구현까지 상속
// Interface는 규칙이고, Mixin은 기능임
mixin Musician {
  void play(String instrument); // 반드시 구현되어야 하는 메서드
  void playPiano() => play("Piano");
}

class Pianist with Musician {
  @override
  void play(String instrument) {
    print("Playing $instrument");
  }
}

void main(List<String> args) {
  var p1 = Point(2, 2);
  var p2 = Point.origin();

  // 클래스는 타입 비교 시 runtimeType == Type보다 is 권장
  print(p1 is Point);
  print(identical(p1, p2)); // false

  // const로 만들어진 객체는 추후 인스턴스 비교 시 같은 값으로 비교됨
  // const로 만들지 않으면, 서로 다른 인스턴스 객체
  const p3 = ImmutablePoint(1, 2);
  const p4 = ImmutablePoint(1, 2);

  print(identical(p3, p4)); // true
}
