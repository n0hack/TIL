// 데코레이터 실험 기능에서 ECMA 스펙에 맞게 업데이트
// 이전에는 descriptor를 반환했지만, 이제는 descriptor를 반환하지 않음
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @loggedMethod
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

function loggedMethod(originalMethod: any, _context: any) {
  function replacementMethod(this: any, ...args: any[]) {
    console.log('LOG: Entering method.');
    const result = originalMethod.call(this, ...args);
    console.log('LOG: Exiting method.');
    return result;
  }
  return replacementMethod;
}

const p = new Person('Lucid');
p.greet();

// const type parameters (const assertion)
// 하지만 5.0부터는 const modifier를 사용할 수 있다. <const T extends HasNames> 이런 식으로..
type HasNames = { names: readonly string[] };
function getNamesExactly<const T extends HasNames>(arg: T): T['names'] {
  return arg.names;
}
// readonly ["Lucid", "Lucy"]
const names = getNamesExactly({ names: ['Lucid', 'Lucy'] });

// enum 개선
