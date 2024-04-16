import React, { useReducer } from 'react';

type Nullable<T> = T | null;

type DateRangePreset = 'TODAY' | 'LAST_WEEK' | 'LAST_MONTH';

type ReviewRatingString = '1' | '2' | '3' | '4' | '5';

// 필터링에 많은 속성이 쿼리로 필요하며, 페이지네이션 등의 속성이 추가될 수 있다.
interface ReviewFilter {
  // 리뷰 날짜 필터링
  startDate: Date;
  endDate: Date;
  dateRangePreset: Nullable<DateRangePreset>;

  // 키워드 필터링
  keywords: string[];

  // 리뷰 점수 필터링
  ratings: ReviewRatingString[];

  // 이외 기타 필터링 옵션
}

// 쿼리를 위한 상태
interface State {
  filter: ReviewFilter;
  page: number;
  size: number;
}

// 위와 같이 복잡한 상태를 사용할 때는, 리듀서를 사용하여 무엇을 변경하고, 어떻게 변경할지 명확하게 구분하는 것이 좋다.
type Action =
  | { payload: ReviewFilter; type: 'filter' }
  | { payload: number; type: 'navigate' }
  | { payload: number; type: 'resize' };

const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'filter':
      return {
        filter: action.payload,
        page: 0,
        size: state.size,
      };
    case 'navigate':
      return {
        filter: state.filter,
        page: action.payload,
        size: state.size,
      };
    case 'resize':
      return {
        filter: state.filter,
        page: 0,
        size: action.payload,
      };
    default:
      return state;
  }
};

const App = () => {
  // const [state, dispatch] = useReducer(reducer, getDefaultState());
  const [fold, setFold] = useReducer((v) => !v, true); // 이전 상태에 의존하여 변경만 하는 경우에도 리듀서를 사용하는 것이 좋다.

  return <div>App</div>;
};

export default App;
