// 타입스크립트에서 타입은 값의 집합을 의미

// 공집합 = never (어떠한 값과도 교집합이 없음)
// 전체집합 = unknown (어떠한 값과 합집합을 해도 unknown이 됨)

// 공집합 다음으로 작은 집합 = 리터럴()
type A = 'A';
type B = 'B';
type Twelve = 12;

type AB = A | B;
const a: AB = 'A';
// c는 AB의 부분집합이 아니므로 오류
// const c: AB = "C";

interface Person {
  name: string;
}

interface Lifespan {
  birth: Date;
  death?: Date;
}

// 어느 쪽에 속하더라도 구조적으로 문제가 없음
// 교집합은 각 타입 내의 속성을 모두 포함하는 것이 일반적인 규칙
// 일반적인 수학에서의 교집합과는 다름 (값으로 풀어서 생각하기)
type PersonSpan = Person & Lifespan;
const ps: PersonSpan = {
  name: 'Alan Turing',
  birth: new Date('1912/06/23'),
  death: new Date('1954/06/07'),
};

// never
// 양쪽 모두에 속하는 값이 없음
type K = keyof (Person | Lifespan);
// 풀어서 보기
// A&B = keyof A | keyof B = ("name" | "birth" | "death")
type ABIntersection = keyof Person | keyof Lifespan;
// A|B = keyof A & keyof B = 겹치는 것이 없으므로 never
type ABUnion = keyof Person & keyof Lifespan;

// 타입 단언보다는 타입 선언을 사용하는 것이 좋음 (오류 검출을 위해)
const alice: Person = { name: 'Alice' };
const bob = {} as Person; // <-- 원래라면 오류가 나야 함

// 하지만 DOM 요소에 접근하는 것처럼 사용자가 판단했을 때 더 정확하다면, 타입 단언이나 non-null assertion(!)을 사용해도 됨
const body = document.body;
// Person과 HTMLElement는 서로의 서브타입이 아니므로 변환 불가능하여, 이 경우 unknown을 사용해야 함
// unknown은 모든 타입의 서브타입이므로, 타입 단언을 사용해도 오류가 나지 않지만, 위험한 동작일 수 있음을 명심
const el = body as unknown as Person;

// 잉여 속성 체크와 할당 가능 검사는 별도의 과정임
interface Room {
  numDoors: number;
  ceilingHeightFt: number;
}
const r: Room = {
  numDoors: 1,
  ceilingHeightFt: 10,
  // elephant: 'present', 오류 발생
};
const obj = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: 'present',
};
const r2: Room = obj; // OK. 잉여 속성 체크는 할당 가능 검사에서 제외됨

interface Options {
  title: string;
  darkMode?: boolean;
}
function createWindow(options: Options) {}
const o = { title: 'Spider Solitaire', darkmode: true };
// createWindow({ title: 'Spider Solitaire', darkmode: true }); darkmode 때문에 오류 발생
createWindow(o); // OK. 잉여 속성 체크는 할당 가능 검사에서 제외됨
createWindow(document.body); // OK. title(string) 속성이 있기 때문

// 함수 표현식으로 사용해야 타입 재사용이 용이함
type DiceFn = (sides: number) => number;
function rollDice1(sides: number): number {
  return 1;
}
const rollDice2: DiceFn = function (sides: number): number {
  return 1;
};
const rollDice3: DiceFn = (sides: number): number => 1;

type Input = {
  weight: number;
};
type Output = {
  sort: string;
};
type NamedVariable = (Input | Output) & { name: string };
const nv: NamedVariable = { weight: 1, sort: 'z', name: 'lucid' };

// 타입 중복 줄이기 (DRY)
interface State {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}
// Step별로 줄여나가기
type TopNavState1 = {
  userId: State['userId'];
  pageTitle: State['pageTitle'];
  recentFiles: State['recentFiles'];
};

type TopNavState2 = {
  [k in 'userId' | 'pageTitle' | 'recentFiles']: State[k];
};

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type TopNavState3 = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>;
const tn3: TopNavState3 = {
  userId: '1',
  pageTitle: '2',
  recentFiles: ['3'],
};

// 값으로부터 타입을 정의
type typeofState = typeof tn3;

function getUserInfo(userId: string) {
  return { userId };
}
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
// 유틸리티 타입
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
type UserInfo = MyReturnType<typeof getUserInfo>;

type ABC = { [k in 'a' | 'b' | 'c']: k extends 'b' ? string : number };

// 안전하게 readonly 사용하기 (얕게 동작함)
