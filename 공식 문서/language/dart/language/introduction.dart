/// 피보나치 함수
int fibonacci(int n) {
  if (n == 0 || n == 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 비동기
const oneSecond = Duration(seconds: 1);

Future<void> printWithDelay(String message) async {
  await Future.delayed(oneSecond);
  print(message);
}

void main() async {
  // var name = "Lucid";
  // var age = 30;
  // var hobbies = ['Coding', 'Reading', 'Traveling'];
  // var year = 1977;

  // print("hello world ${name} ${hobbies}");

  // // 제어 흐름
  // if (year >= 2001) {
  //   print('21st century');
  // } else if (year >= 1901) {
  //   print('20th century');
  // }

  // for (final hobby in hobbies) {
  //   print(hobby);
  // }

  // var fiboResult = fibonacci(5);
  // print('Fibonacci of 5 is $fiboResult\n---');

  // hobbies.forEach((hobby) => print(hobby));

  // print('--- Class ---');

  // var voyager = Spacecraft('Voyager I', DateTime(1997, 9, 5));
  // voyager.describe();

  // var voyager3 = Spacecraft.unlaunched('Voyager III');
  // voyager3.describe();

  // final yourPlanet = Planet.venus;
  // if (!yourPlanet.isGiant) {
  //   print('Your planet is not a giant planet');
  // }
  await printWithDelay('hi');

  dynamic x = 123;
  x = 'Hello';

  print("안녕! $x");
}

class Spacecraft {
  String name;
  DateTime? launchDate;

  // Getter
  int? get launchYear => launchDate?.year;

  // 문법적 설탕 (아래와 같이 사용하면 바로 초기화 가능)
  Spacecraft(this.name, this.launchDate) {}

  // this(...)는 생성자 포워딩 문법
  Spacecraft.unlaunched(String name) : this(name, null);

  void describe() {
    print('Spacecraft: $name');

    var launchDate = this.launchDate;

    if (launchDate != null) {
      int years = DateTime.now().difference(launchDate).inDays ~/ 365; // 365로 나눈 정수 몫
      print('Launched: $launchYear ($years years ago)');
    } else {
      print('Unlaunched');
    }
  }
}

enum PlanetType { terrestrial, gas, ice }

// 확장 Enum
// class와 달리 선언 시 고정되는 컴파일 상수
// 상태 종류가 유한하고, 바뀌지 않는 경우 사용
enum Planet {
  mercury(planetType: PlanetType.terrestrial, moons: 0, hasRings: false),
  venus(planetType: PlanetType.terrestrial, moons: 0, hasRings: false),
  neptune(planetType: PlanetType.ice, moons: 14, hasRings: true);

  // 생성자
  const Planet({required this.planetType, required this.moons, required this.hasRings});

  final PlanetType planetType;
  final int moons;
  final bool hasRings;

  bool get isGiant => planetType == PlanetType.gas || planetType == PlanetType.ice;
}
