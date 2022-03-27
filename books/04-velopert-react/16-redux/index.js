import { createStore } from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 액션 타입
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 생성 함수
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 초기값
const initialState = {
  toggle: false,
  counter: 0,
};

// 리듀서
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return { ...state, toggle: !state.toggle };
    case INCREASE:
      return { ...state, counter: state.counter + action.difference };
    case DECREASE:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

// 상태를 보관하는 저장소 생성
const store = createStore(reducer);

const render = () => {
  const state = store.getState();

  // 토글 처리
  if (state.toggle) divToggle.classList.add('active');
  else divToggle.classList.remove('active');
  // 카운터 처리
  counter.innerText = state.counter;
};
render();

// 스토어가 바뀔 때마다 구독을 통해 리렌더링
store.subscribe(render);

// 디스패치
divToggle.addEventListener('click', () => store.dispatch(toggleSwitch()));
btnIncrease.addEventListener('click', () => store.dispatch(increase(1)));
btnDecrease.addEventListener('click', () => store.dispatch(decrease()));
