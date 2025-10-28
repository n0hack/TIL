void main(List<String> args) {
  // Set은 중복이 없는 리스트이며, 중복된 값이 들어올 시 자동으로 제거됨
  // 해시 기반으로 탐색하기에 매우 빠름 - O(1)
  // Set는 빈 값으로 설정하면, Map이 되기 때문에 타입을 지정해야 함
  var nameSet = <String>{};
  print(nameSet.runtimeType); // Type: _Set<String>

  // Set을 불변으로 만들고 싶은 경우, const를 사용하면 됨
  final constantSet = const {'hello', 'mr', 'my', 'yesterday'};
  // constantSet.add('test'); // 불변이므로 에러 발생
  print(constantSet.runtimeType); // Type: _ConstSet<String>
  print(constantSet);

  // 불변 Map
  final constantMap = const {'name': 'Lucid', 'age': 30};
  // constantMap['job'] = 'developer'; // 불변이므로 에러 발생

  // 컬렉션 요소 확장 문법 (Collection Elements)
  // 단순 값뿐 아니라 다양한 표현을 넣을 수 있음

  // null이 아닐 때만 컬렉션에 추가
  int? a = null;
  int b = 3;

  print([1, ?a, ?b, a, 5]); // [1, 3, null, 5]

  String? k1 = "Apple";
  String? k2 = null;
  int? v1 = 3;
  int? v2 = null;

  var m1 = {k1: v2}; // {Apple: null}
  var m2 = {k1: ?v2}; // {}
  var m3 = {k2: v1}; // {null: 3}
  var m4 = {?k2: v1}; // {}

  // Null Aware Spread
  List<int>? list1 = null;
  var list2 = [1, null, 3];

  // nullable한 리스트에 Spread 연산자를 사용하고 싶은 경우, ...?을 사용해야 에러 안 뜸
  var list3 = [0, ...?list1, ...list2, 4];
  print(list3);

  // If Elements
  var ifName = "apple";
  var ifList = [0, if (ifName == "apple") 1 else if (ifName == "banana") 2, 2, 3];
  print(ifList);

  // if-case 패턴 매칭
  Object ifCaseData = 123;
  var ifCaseList = [
    if (ifCaseData case int i) 'int: $i',
    if (ifCaseData case String s) 'string: $s',
    if (ifCaseData case double d) 'double: $d',
    if (ifCaseData case bool b) 'bool: $b',
  ];
  print(ifCaseList);
}
