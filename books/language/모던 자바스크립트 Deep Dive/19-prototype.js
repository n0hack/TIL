(function () {
  function Circle(radius) {
    this.radius = radius;
    this.getArea = function () {
      return Math.PI * Math.pow(this.radius, 2);
    };
  }

  const circle1 = new Circle(1);
  const circle2 = new Circle(2);

  // getArea는 굳이 인스턴스로 만들 필요가 없음
  console.log(circle2.getArea === circle1.getArea);
})();

(function () {
  function Circle(radius) {
    this.radius = radius;
  }

  Circle.prototype.getArea = function () {
    return Math.PI * Math.pow(this.radius, 2);
  };

  const circle1 = new Circle(1);
  const circle2 = new Circle(2);

  console.log(circle1);
  console.log(circle2.getArea === circle1.getArea);
  console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));
})();

(function () {
  console.log("-- 상속 --");
  // 이렇게 생성된 객체는 프로토타입 체인 종점에 위치
  function User() {
    this.say = function () {
      console.log("Hello World");
    };
  }
  User.prototype.hi = function () {
    console.log("hi");
  };
  const ming = new User();
  const dante = new User();
  console.dir(User);
  console.dir(ming);
  ming.say();
  // 객체마다 고유한 프로퍼티를 가지고 싶다면 this를 사용해야 함
  console.log(ming.say === dante.say);
  console.log(ming.__proto__);
  console.log(dante.__proto__);

  function SuperClass(name) {
    this.name = name;
  }
  SuperClass.prototype.say = function () {
    console.log(`I am ${this.name}`);
  };

  console.dir(SuperClass);

  function SubClass(name) {
    SuperClass.call(this, name);
  }
  SubClass.prototype = Object.create(SuperClass.prototype);
  SubClass.prototype.constructor = SubClass;
  SubClass.prototype.run = function () {
    console.log(`${this.name} is running`);
  };

  const jeon = new SubClass("Jeon");
  console.dir(jeon);
  console.dir(jeon.__proto__);
  console.dir(jeon.__proto__.__proto__);
  jeon.say();
})();
