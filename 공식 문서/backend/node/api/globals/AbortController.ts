// 프로미스 기반의 비동기 작업을 취소할 수 있음
const ac = new AbortController();

ac.signal.addEventListener('abort', () => console.log('Aborted!'), { once: true });

ac.abort();

console.log(ac.signal.aborted); // Prints true
