## 세션 정보

- 제목: 우리는 응집도에 대하여 이야기할 필요가 있다
- 발표: 한윤석님 (마켓컬리)

## 노트

### 단일 책임 원칙

> 변화의 목적은 오직 한 가지여야 한다.

만약 페이지네이션을 담당하는 컴포넌트에서 query 변경 기능까지 구현한다면, 이는 컴포넌트의 목적이 두 가지가 되어 버린다.

- 페이지네이션 기능
- 쿼리 변경 기능

```jsx
// before
const changePage = (value) => {
  // 기능적 응집도가 낮음 (기능이 2개이므로 분리하기)
  onChange(value);
  window.history.replaceState(null, '', `?page=${value.page}&size=${value.size}`);
};

// after
const changePage = (value) => {
  onChange(value);
};

// 컴포넌트 바깥으로 분리
// 만약 컴포넌트 내부에 있었다면, 나중에 해당 컴포넌트가 쿼리를 바꾸고 있는지 파악하기 어려울 수 있음
const [paging, setPaging] = useState({ page: 1, size: 10, total: 100 });

useEffect(() => {
  const { page, size } = paging;
  window.history.replaceState(null, '', `?page=${page}&size=${size}`);
}, [paging]);

return <Paginiation paging={paging} onChange={handleChage} />;
```

### 높은 응집도가 필요한 이유

- 이해하기 쉽다
- 의도를 파악하기 쉽다
- 테스트하기 쉽다

> 응집도는 컴포넌트를 나누는 기준이 된다. 그렇다 해서 응집도가 높다고 무조건 좋은 것은 아니며, 필요한 만큼만 응집도를 높이면 된다.

### 테스트 작성하기

- 테스트 코드를 작성하기 어렵다면, 코드를 잘못 짠 게 아닌지 생각해 보기
- 테스트 코드는 응집도 있는 코드를 작성했는지 판단할 수 있는 도구가 될 수 있음
