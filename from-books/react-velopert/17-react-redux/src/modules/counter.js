// 액션 정의 (모듈명/액션명)
// 모듈명을 함께 적어주는 이유는 규모가 커졌을 때, 중복을 방지하기 위함
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 초기값
const initialState = { number: 0 };

// 업데이트 함수
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return { number: state.number + 1 };
    case DECREASE:
      return { number: state.number - 1 };
    default:
      return state;
  }
}

export default counter;
