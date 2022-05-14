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
Teacher.prototype.teach = function () {
  return '수업 중';
};

// 이렇게 중간 다리를 놓지 않으면, Teacher.prototype 객체가 인스턴스별 속성을 공유하게 됨 (name, age)
function Bridge() {}
Bridge.prototype = Person.prototype;

Teacher.prototype = new Bridge();
Teacher.prototype.constructor = Teacher;
