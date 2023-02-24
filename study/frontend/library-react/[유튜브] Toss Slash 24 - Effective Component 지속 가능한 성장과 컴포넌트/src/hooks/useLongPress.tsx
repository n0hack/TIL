// longPress 동작 추상화
// hooks를 정의해놓고, 컴포넌트에서는 hooks를 가져다 쓰는 방식으로 구현하면
// 컴포넌트는 hooks에서 받아온 값을 어떻게 보여줄지만 정하면 된다.
export default function useLongPress() {
  return {
    onMouseDown: () => {},
    onMouseUp: () => {},
    onMouseLeave: () => {},
    onTouchStart: () => {},
    onTouchEnd: () => {},
  };
}
