import React from 'react';
import tw, { css } from 'twin.macro';
import { ReactComponent as Icon } from '../assets/test.svg';

interface Props {}

const Test = ({}: Props) => {
  return (
    <div
      css={[
        tw`text-red-400`,
        css`
          color: blue;
        `,
      ]}
    >
      노토 산스
      <Icon className="text-red-400" />
      <Test2>zz</Test2>
    </div>
  );
};

export default Test;

const Test2 = tw.div`text-green-600`;
