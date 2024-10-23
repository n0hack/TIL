// 개발자 가상 면접 - Promise.race 는 언제 쓸까요? (수요코딩회 1회 1/6)
// 네트워크 요청 등의 처리 시, 제한 시간(Timeout)을 두고 싶을 사용할 수 있다.
const log = console.log;

function delay<T>(time: number, value: T): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), time));
}

interface File {
  name: string;
  body: string;
  size: number;
}

function getFile(name: string): Promise<File> {
  return delay(3000, { name, body: '...', size: 100 });
}

export async function main(): Promise<void> {
  const result = await Promise.race([getFile('file1.png'), delay(4000, 'Timeout')]);

  if (result === 'Timeout') {
    log('네트워크 환경을 확인해 주세요.');
  } else {
    log(result);
  }
}
