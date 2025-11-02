// 뒤에서부터 find 가능
const nums = [5, 2, 7, 1, 9, 2];

console.log(nums.findLast((num) => num % 2 === 0)); // 2
console.log(nums.findLastIndex((num) => num % 2 === 0)); // 5

// 불변 배열 관련 메서드
const arr = [3, 1, 2];

console.log(arr.toSorted());
console.log(arr.toReversed());
console.log(arr.toSpliced(1, 1, 4));
console.log(arr.with(1, 4)); // 배열 복사 후, 해당 인덱스 요소만 변경
