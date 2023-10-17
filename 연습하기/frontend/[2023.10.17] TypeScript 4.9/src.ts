// NOTE satisfied는 타입을 만족할 수 있게 만드는 것 외에, 추론도 잘 되도록 한다.
type Colors = 'red' | 'green' | 'blue';

type RGB = [red: number, green: number, blue: number];

const palette = {
  red: [255, 0, 0],
  green: '#00ff00',
  blue: [0, 0, 255],
} satisfies Record<Colors, string | RGB>;

const redComponent = palette.red.flat(); // satisfied를 쓰지 않는다면, string으로 추론되어 에러가 발생한다.
const greenComponent = palette.green.split('');
