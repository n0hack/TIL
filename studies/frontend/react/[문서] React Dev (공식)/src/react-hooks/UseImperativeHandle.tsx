import React, { forwardRef, useImperativeHandle, useRef } from 'react';

export type Props = {
  test: () => void;
};

const UseImperativeHandle = forwardRef<Props>((props, ref) => {
  console.log('UseImperativeHandle');

  const divRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      test: () => {
        console.log('테스트!');
      },
    }),
    []
  );

  return (
    <div ref={divRef} {...props}>
      UseImperativeHandle
    </div>
  );
});

export default UseImperativeHandle;
