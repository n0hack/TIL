/**
 * NOTE
 * 1. enum은 유연하지 않으며, 항상 명시적으로 사용해야 함 (ex. LOG_LEVEL.DEBUG)
 * 2. enum은 컴파일 시 자바스크립트 코드로 변환되므로, 번들 사이즈에 영향을 줌
 * 3. enum보다는 객체를 as const로 만들어 사용하면, 유연하게 사용할 수 있음
 * 4. 다만 enum 나름의 장점이 있으며, 팀바팀으로 결정해서 사용하면 좋을 듯
 */
enum LOG_LEVEL {
  DEBUG = 'DEBUG',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

function logVer1(message: string, level: LOG_LEVEL) {}

// logVer1("Hey", "DEBUG") // error
logVer1('Hey', LOG_LEVEL.DEBUG); // ok

const LOG_LEVEL_2 = {
  DEBUG: 'DEBUG',
  WARN: 'WARN',
  ERROR: 'ERROR',
} as const;

type ObjectValues<T> = T[keyof T];

type LogLevel = ObjectValues<typeof LOG_LEVEL_2>;

function logVer2(message: string, level: LogLevel) {}

logVer2('Hey', LOG_LEVEL_2.DEBUG); // ok
logVer2('Hey', 'DEBUG'); // ok
