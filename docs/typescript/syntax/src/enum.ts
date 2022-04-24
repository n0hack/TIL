// enum은 코드 가독성을 위해 사용
// 숫자 enum은 0부터 시작하며, 시작번호 명시 가능
enum Weekdays {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thurday,
  Friday,
  Saturday,
  Sunday,
}
console.log(Weekdays.Monday);
console.log(Weekdays[0]);

// 문자열 enum은 항상 명시
enum Direction {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

// const enum은 생성되지 않음
const enum Action {}
