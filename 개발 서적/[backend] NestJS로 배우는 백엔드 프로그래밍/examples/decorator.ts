// 데코레이터 합성: 데코레이터는 위에서 아래로 호출되며, 아래에서 위로 실행된다.
function firstDecorator() {
  console.log('first(): factory evaluated');
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('first(): called');
  };
}

function secondDecorator() {
  console.log('second(): factory evaluated');
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('second(): called');
  };
}

class TestClass {
  @firstDecorator()
  @secondDecorator()
  test() {
    console.log('함수 호출');
  }
}

const t = new TestClass();
t.test();

// 클래스 데코레이터(정의를 읽거나 수정할 수 있음)
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    reportingURL = 'http://www.example.com';
  };
}

@reportableClassDecorator
class BugReport {
  type = 'report';
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}

const bug = new BugReport('버그 제목');
console.log(bug);

// 접근자 데코레이터
function Enumrable(enumerable: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = enumerable;
  };
}

class Person {
  constructor(private name: string) {}

  @Enumrable(true)
  get getName() {
    return this.name;
  }

  @Enumrable(false)
  set setName(name: string) {
    this.name = name;
  }
}

const person = new Person('루시드') as any;
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// 매개변수 데코레이터
function MinLength(min: number) {
  return function (target: any, propertyKey: string, parameterIndex: number) {
    target.validators = {
      minLength: function (args: string[]) {
        return args[parameterIndex].length >= min;
      },
    };
  };
}

function Validate(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;

  descriptor.value = function (...args: any) {
    Object.keys(target.validators).forEach((key) => {
      if (!target.validators[key](args)) {
        throw new Error('에러 발생');
      }
    });
    method.apply(this, args);
  };
}

class User {
  private name: string = '';

  @Validate
  setName(@MinLength(3) name: string) {
    console.log('실행');
    this.name = name;
  }
}

const user = new User();
user.setName('루시드');
