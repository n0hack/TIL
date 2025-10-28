// 제네릭을 사용하여 중복을 줄이고, 추상화할 수 있음
abstract class Cache<T> {
  T getByKey(String key);
  void setByKey(String key, T value);
}

// 자기자신의 타입과만 비교할 수 있도록 타입 강제 F-Bounded Generic
abstract interface class Comparable<T> {
  int compareTo(T other);
}

int compareAndOffset<T extends Comparable<T>>(T a, T b) {
  return a.compareTo(b) + 1;
}

class A implements Comparable<A> {
  @override
  int compareTo(A other) => 0;
}

void main(List<String> args) {
  // Dart는 런타임에도 제네릭 유지
  var names = <String>[];
  print(names is List<String>); // true

  // F-Bounded Generic
  compareAndOffset(A(), A());
}
