import './index.scss';
import { createStore } from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 액션 이름 만들기 (고유한 이름으로 사용 / 주로 대문자 사용)
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 생성 함수
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 초기 상태
const initialState = {
  toggle: false,
  counter: 0,
};

// 리듀서 정의
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

// 스토어 생성 (프로젝트당 1개, 그 위로 만들 수 있긴 하지만 관리 어려워짐)
const store = createStore(reducer);

const render = () => {
  const state = store.getState();

  if (state.toggle) divToggle.classList.add('active');
  else divToggle.classList.remove('active');

  counter.innerText = state.counter;
};
render();
store.subscribe(render); // 상태가 바뀔 때마다 render 호출

// 디스패치 연결
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.addEventListener('click', () => {
  store.dispatch(increase(1));
});
btnDecrease.addEventListener('click', () => {
  store.dispatch(decrease());
});

// 구독을 통해 상태가 바뀔 때마다 호출
const listener = () => {
  console.log('상태가 업데이트 됨!');
};
const unsubscribe = store.subscribe(listener);

// 추후 구독 비활성화를 위해 사용
// unsubscribe();
