// redux-actions 라이브러리를 이용하면 액션, 리듀서를 간편하게 만들 수 있음
import { createAction, handleActions } from 'redux-actions';

// 액션 앞에 모듈 이름을 붙여줌으로써 중복 방지
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
  number: 0,
};

const counter = handleActions(
  {
    [INCREASE]: (state, _) => ({ number: state.number + 1 }),
    [DECREASE]: (state, _) => ({ number: state.number - 1 }),
  },
  initialState
);

// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return { ...state, number: state.number + 1 };
//     case DECREASE:
//       return { ...state, number: state.number - 1 };
//     default:
//       return state;
//   }
// }

export default counter;
