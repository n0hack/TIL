## 컨퍼런스 세션 정보

- 제목: [토스ㅣSLASH 21 - 프론트엔드 웹 서비스에서 우아하게 비동기 처리하기](https://www.youtube.com/watch?v=FvRtoViujGg)
- 주제: React Suspense를 이용하여 우아하게 처리하는 이론과 실전 적용법을 공유
- 발표: 박서진님
- 학습 기간: 2023.02.27

## 노트

### 좋은 코드의 특징

- 성공, 실패의 경우를 분리해 처리할 수 있다.
- 비즈니스 로직을 한눈에 파악할 수 있다.

```jsx
<ErrorBoundary fallback={<MyErrorPage />}>
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
</ErrorBoundary>
```

비동기 코드를 선언적으로 동기적으로 처리하는 것처럼 사용할 수 있다.

### Recoil의 비동기 셀렉터

토스 Tuba팀에서는 다음과 같이 사용하고 있다.

```typescript
export const templateSetSelector = selectorFamily({
  key: '@messages/template-set',
  get: (no: number) => async () => {
    return fetchTemplateSet(no);
  },
});

export const historiesOfTemplateSetSelector = selectorFamily({
  key: '@pages/messenger/template-set/histories',
  get:
    (templateSetNo: number) =>
    async ({ get }) => {
      return fetchHistoriesOfTemplateSet(templateSetNo);
    },
});
```

이렇게 사용 시에도 Suspense로 감싸주게 되면, `useRecoilValue`로 가져올 때 Suspense가 발생하게 된다.

### 서비스의 코드 복잡도를 낮춘 방법: Hooks

- 선언적으로 코드 작성하기
  - Suspense 외에도, useState, useMemo 등도 해당한다.
