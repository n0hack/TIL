// EXAMPLE 1:
// 이렇게만 하면 할당이 가능하다. (타입을 넓히고 싶은 경우)
const scores: Record<string, number> = {};

scores.english = 100;
scores.math = 100;

// satiesfies를 사용하면 현재 타입을 만족하는지 체크한다. (타입 좁히기)
// 넓혀서 사용하고 싶은 경우에는 어울리지 않는 키워드이다.
const scores2 = {} satisfies Record<string, number>;

// scores2.english = 100; // 실제 속성이 없기 때문에 에러 발생
// scores2.math = 100; // 실제 속성이 없기 때문에 에러 발생

// EXAMPLE 2:
const config = {
  wide: '100px',
  narrow: 0,
} satisfies Record<string, string | number>;

// satiesfies에 의해 타입이 좁아져, 추론이 가능하다.
// 만약 변수 타입인 config: Record<string, string | number>와 같이 사용했다면,
// 타입이 확장되어 key가 string 집합이므로, 추론이 불가능하다.
console.log(config.wide);
console.log(config.narrow);

// EXAMPLE 3:
// satisfies는 명시한 타입을 만족할 경우 자동으로 다운 캐스팅(타입 좁히기)을 한다.
type Colors = 'red' | 'green' | 'blue';
type RGB = [red: number, green: number, blue: number];

// 이렇게 하면 green은 문자열임에도 불구하고, 문자열 메소드를 사용할 수 없다.
const palette1: Record<Colors, string | RGB> = {
  red: [255, 0, 0],
  green: '#00ff00',
  blue: [0, 0, 255],
};

// palette1.green.toUpperCase(); // Error

// satisfies를 사용하면, 실제 사용된 속성을 토대로 타입을 좁히기 때문에 추론이 가능하다.
const palette2 = {
  red: [255, 0, 0],
  green: '#00ff00',
  blue: [0, 0, 255],
} satisfies Record<Colors, string | RGB>;

palette2.green.toUpperCase(); // OK
