(int, int) swap((int, int) record) {
  var (a, b) = record;

  return (b, a);
}

({String name, int age}) userInfo(Map<String, dynamic> json) => (name: json['name'], age: json['age']);

// Record는 아래 특징을 가짐
// 1. 크기 고정 (Fixed Size)
// 2. 명확한 타입 (Typed)
// 3. 순서와 이름 구조가 타입에 포함됨
void main(List<String> args) {
  // 이름(name)/위치(positional) 기반의 필드가 섞인 구조
  var record = ('first', a: 2, b: true, 'last');

  // 'last'
  print(record.$2);

  // Equality
  (int x, int y, int z) point = (1, 2, 3);
  (int r, int g, int b) color = (1, 2, 3);

  // 이름이 달라도 같음 (위치 기반)
  print(point == color);

  ({int x, int y, int z}) point2 = (x: 1, y: 2, z: 3);
  ({int r, int g, int b}) color2 = (r: 1, g: 2, b: 3);

  // named field가 다름
  print(point2 == color2);

  // Destructuring
  final (:name, :age) = userInfo({'name': 'Lucid', 'age': 30});
  print(name);
  print(age);
}
