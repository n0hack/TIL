/*
- 3월 ~ 5월: 봄
- 6월 ~ 8월: 여름
- 9월 ~ 11월: 가을
- 12월 ~ 2월: 겨울
*/
const Seasons = ['봄', '여름', '가을', '겨울'];
const getSeasonIndex = (month) => Math.floor(((month + 9) % 12) / 3);
const getSeason = (month) => Seasons[getSeasonIndex(month)];

console.log(getSeason(2));
console.log(getSeason(5));
console.log(getSeason(7));
console.log(getSeason(10));
console.log(getSeason(12));

/*
- 0 미만: 몹시 추워요
- 0 이상 10 미만: 추워요
- 10 이상 20 미만: 선선해요
- 20 이상 30 미만: 조금 더워요
- 30 이상 40 미만: 더워요
- 40 이상: 몹시 더워요
*/
const Temperatures = [
  '몹시 추워요',
  '추워요',
  '선선해요',
  '조금 더워요',
  '더워요',
  '몹시 더워요',
];
const getScore = (temperature) =>
  Math.min(Math.max(Math.floor(temperature / 10), -1), 4) + 1;
const getWeather = (temperature) => Temperatures[getScore(temperature)];

console.log(getWeather(-15));
console.log(getWeather(5));
console.log(getWeather(15));
console.log(getWeather(25));
console.log(getWeather(35));
console.log(getWeather(55));
