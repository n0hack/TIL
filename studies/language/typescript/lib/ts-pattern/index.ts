import { P, match } from 'ts-pattern';

// P = Pattern 그 자체
const sanitize = (name: string | number) =>
  match(name)
    .with('text', 'span', 'p', () => 'text')
    .with('btn', 'button', () => 'button')
    .with(P.number, () => 'num')
    .with(
      P.when((t) => t === '머임'),
      () => 'hello'
    )
    .otherwise(() => name);

console.log(sanitize('text'));
console.log(sanitize('button'));
console.log(sanitize(123));
console.log(sanitize('머임'));

// 데이터 구조 일부 선택하여 핸들러에 주입
// 여러개를 사용해야 한다면, 이름을 지정하여 사용
const selectInput = {
  type: 'post',
  user: {
    name: 'Lucid',
  },
  content: "I'm Lucid",
};

match(selectInput)
  .with({ type: 'post', user: { name: P.select('username') }, content: P.select('content') }, ({ username, content }) =>
    console.log(`username: ${username}, content: ${content}`)
  )
  .otherwise(() => '');
