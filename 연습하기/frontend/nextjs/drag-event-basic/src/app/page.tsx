'use client';

import { useRef, useState } from 'react';

// 모바일인지 PC인지 판단하는 조건
// const isTouchScreen = typeof window !== 'undefined' && window.matchMedia('(hover: none) and (pointer: coarse)').matches;

// 드래그를 적용하는 유틸 함수
const registMouseDownDrag = ({
  onDragChange,
  stopPropagation,
}: {
  onDragChange: (deltaX: number, deltaY: number) => void;
  stopPropagation?: boolean;
}) => {
  return {
    // 모바일은 마우스 이벤트가 아닌 터치 이벤트가 발생
    onTouchStart: (touchEvent: React.TouchEvent<Element>) => {
      // 이벤트가 부모에게 전파(버블링)되는 것 방지
      if (stopPropagation) {
        touchEvent.stopPropagation();
      }

      const touchMoveHandler = (moveEvent: TouchEvent) => {
        if (moveEvent.cancelable) moveEvent.preventDefault();
        // 이동한 값을 계산 후 전달
        const deltaX = moveEvent.touches[0].clientX - touchEvent.touches[0].clientX;
        const deltaY = moveEvent.touches[0].clientY - touchEvent.touches[0].clientY;
        onDragChange(deltaX, deltaY);
      };

      const touchEndHandler = () => {
        document.removeEventListener('touchmove', touchMoveHandler);
      };

      document.addEventListener('touchmove', touchMoveHandler, { passive: false });
      // 이 이벤트는 한 번만 실행되면 되므로 once 속성을 true로 설정
      document.addEventListener('touchend', touchEndHandler, { once: true });
    },
    onMouseDown: (clickEvent: React.MouseEvent<Element, MouseEvent>) => {
      console.log(`[mousedown] x: ${clickEvent.clientX}, y: ${clickEvent.clientY}`);

      // 이벤트가 부모에게 전파(버블링)되는 것 방지
      if (stopPropagation) {
        clickEvent.stopPropagation();
      }

      const mouseMoveHandler = (moveEvent: MouseEvent) => {
        console.log(`[mousemove] x: ${moveEvent.clientX}, y: ${moveEvent.clientY}`);

        // 이동한 값을 계산 후 전달
        const deltaX = moveEvent.clientX - clickEvent.clientX;
        const deltaY = moveEvent.clientY - clickEvent.clientY;
        onDragChange(deltaX, deltaY);
      };

      const mouseUpHandler = (unclickEvent: MouseEvent) => {
        console.log(`[mouseup] x: ${unclickEvent.clientX}, y: ${unclickEvent.clientY}`);

        document.removeEventListener('mousemove', mouseMoveHandler);
      };

      document.addEventListener('mousemove', mouseMoveHandler);
      // 이 이벤트는 한 번만 실행되면 되므로 once 속성을 true로 설정
      document.addEventListener('mouseup', mouseUpHandler, { once: true });
    },
  };
};

const AppPage = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const boundaryRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  const { x, y } = position;

  return (
    <div className="p-12">
      <h1 className="text-3xl font-bold">Drag Boundary</h1>
      <p className="text-lg mt-2">
        with boundary bounce - x: {x} y: {y}
      </p>
      <div
        ref={boundaryRef}
        className="bg-slate-300 w-full h-[480px] min-h-[480px] rounded-2xl mt-4 relative overflow-hidden flex items-center justify-center"
      >
        <div
          ref={boxRef}
          className="w-24 h-24 bg-white rounded-2xl shadow-lg absolute cursor-pointer"
          style={{
            transform: `translate(${x}px, ${y}px)`,
          }}
          {...registMouseDownDrag({
            onDragChange: (deltaX, deltaY) => {
              if (!boundaryRef.current || !boxRef.current) {
                return;
              }

              // Box의 초기 위치를 정중앙으로 설정(초기 위치에 따라 계산식 변함)
              // 정중앙이 초기 위치라면, 원점은 (boundary.width / 2, boundary.height / 2)가 됨
              const BOUNDARY_PADDING = 12;
              const boundary = boundaryRef.current.getBoundingClientRect();
              const box = boxRef.current.getBoundingClientRect();

              // 이동 가능 영역에 대해 좌표를 반환하는 함수
              const inrange = (v: number, min: number, max: number) => {
                if (v < min) return min;
                if (v > max) return max;
                return v;
              };

              setPosition({
                x: inrange(
                  x + deltaX,
                  Math.floor(-boundary.width / 2 + box.width / 2 + BOUNDARY_PADDING),
                  Math.floor(boundary.width / 2 - box.width / 2 - BOUNDARY_PADDING),
                ),
                y: inrange(
                  y + deltaY,
                  Math.floor(-boundary.height / 2 + box.height / 2 + BOUNDARY_PADDING),
                  Math.floor(boundary.height / 2 - box.height / 2 - BOUNDARY_PADDING),
                ),
              });
            },
            stopPropagation: true,
          })}
        />
      </div>
    </div>
  );
};

export default AppPage;
