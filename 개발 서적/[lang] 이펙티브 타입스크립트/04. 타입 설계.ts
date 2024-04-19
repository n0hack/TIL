namespace ch04 {
  interface RequestPending {
    state: 'pending';
  }

  interface RequestError {
    state: 'error';
    error: string;
  }

  interface RequestSuccess {
    state: 'success';
    pageText: string;
  }

  // 인터페이스를 사용한 태그된 유니온을 사용하는 편이 좋다.
  type RequestState = RequestPending | RequestError | RequestSuccess;

  interface State {
    currentPage: string;
    requests: { [page: string]: RequestState };
  }

  function renderPage(state: State) {
    const { currentPage } = state;
    const requestState = state.requests[currentPage];

    switch (requestState.state) {
      case 'pending':
        return '로딩 중...';
      case 'error':
        return `에러: ${requestState.error}`;
      case 'success':
        return requestState.pageText;
    }
  }

  async function changePage(state: State, newPage: string) {
    state.requests[newPage] = { state: 'pending' };
    state.currentPage = newPage;

    try {
      const data = await fetch(newPage);
      const pageText = await data.text();
      state.requests[newPage] = { state: 'success', pageText };
    } catch (e) {
      state.requests[newPage] = { state: 'error', error: '' + e };
    }
  }
}
