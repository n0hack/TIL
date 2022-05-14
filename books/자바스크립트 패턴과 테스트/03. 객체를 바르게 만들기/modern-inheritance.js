function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sleep = function (isNight) {
  return isNight ? true : false;
};
Person.prototype.walk = function () {
  return '걷는 중';
};

function Teacher(name, age) {
  // 부모 클래스(함수)를 호출해야 함
  Person.apply(this, [name, age]);
}

// 프로토타입을 기반으로 객체 생성
Teacher.prototype = Object.create(Person.prototype);
// Person을 가리키고 있기 때문에 프로토타입의 생성자를 Teacher로 다시 변경
Teacher.prototype.constructor = Teacher;
Teacher.prototype.teach = function () {
  return '수업 중';
};
