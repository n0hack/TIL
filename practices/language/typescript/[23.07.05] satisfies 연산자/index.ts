/**
 * https://www.zerocho.com/category/TypeScript/post/638c327844d418915ee64b0b
 */

const oldPalette: Record<'red' | 'green' | 'blue', string | [number, number, number]> = {
  red: [255, 0, 0],
  green: '#00ff00',
  blue: [0, 0, 255],
};
// 객체 타입을 유니온으로 설정했기 때문에, 튜플일 수도 있겠다 생각
// oldPalette.green.toUpperCase(); // Error

const newPalette = {
  red: [255, 0, 0],
  green: '#00ff00',
  blue: [0, 0, 255],
} satisfies Record<'red' | 'green' | 'blue', string | [number, number, number]>;
newPalette.green.toUpperCase(); // Pass
