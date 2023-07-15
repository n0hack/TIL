interface RequestPending {
  state: 'pending';
}

interface RequestError {
  state: 'error';
  error: string;
}

interface RequestSuccess {
  state: 'ok';
  pageText: string;
}

type RequestState = RequestPending | RequestError | RequestSuccess;

interface State {
  currentPage: string;
  requests: { [page: string]: RequestState };
}

// 코드가 길긴 하지만, 모든 요청의 상태를 명시적으로 모델링함
function renderPage(state: State) {
  const { currentPage } = state;
  const requestState = state.requests[currentPage];

  switch (requestState.state) {
    case 'pending':
      return 'Loading';
    case 'error':
      return `Error: ${requestState.error}`;
    case 'ok':
      return `Success: ${requestState.pageText}`;
  }
}

// 주석과 변수명에 타입을 적을 필요가 없음. 타입스크립트는 알아서 동기화함
// 다만 단위가 있는 숫자들은 변수명 뒤에 단위를 적어주면 더욱 명확함. ex. timeMs

// nums를 변경하지 않는 경우, 주석으로 적지 말고 readonly로 처리하면 더욱 명확함
function sort(nums: readonly number[]) {
  return nums.slice().sort();
}

function pluck<T, K extends keyof T>(records: T[], key: K): T[K][] {
  return records.map((r) => r[key]);
}
const books = [
  { title: '연필', author: '나' },
  { title: '공책', author: '너' },
];
const bookTitles = pluck(books, 'title');
console.log(bookTitles);

// 부정확한 타입보다 미완성 타입이 더 좋을 수 있음 (any와 unknown 구분)
