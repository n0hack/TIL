## react-query를 사용하는 이유

- 서버 상태 관리 (캐싱, 중복 요청에 대한 처리 등을 간편하게 할 수 있음)

## Stale Time과 CacheTime의 차이

### Stale Time

- 기본값은 0초이며, 마운트되는 시점에서 데이터가 `fresh` -> `stale`로 상태 변화
- 데이터가 stale 상태라면 다음에 마운트되는 시점에 다시 fetch 시도
- 이 외에도 `refetchInterval` 같은 옵션이 설정되어 있다면, 다시금 fetch를 시도함

### Cache Time

- 기본값은 5분(1000 x 60 x 5)
- 데이터를 불러온 이후부터 캐싱 시작이지만, 언마운트(inactive) 시점부터 카운트 시작
