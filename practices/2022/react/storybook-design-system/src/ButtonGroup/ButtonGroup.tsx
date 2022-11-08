import { css } from '@emotion/react';
import React from 'react';

interface Props {
  /** 버튼을 보여줄 방향 */
  direction?: 'row' | 'column';
  /** 버튼을 우측에 보여줍니다. */
  rightAlign?: boolean;
  /** 버튼과 버튼사이의 간격을 설정합니다. */
  gap?: number | string;
  /** 버튼 그룹에서 보여줄 버튼들 */
  children: React.ReactNode;
  /* 스타일 커스터마이징 하고싶을 때 사용 */
  className?: string;
}

const ButtonGroup = ({
  children,
  direction = 'row',
  gap = '0.5rem',
  className,
  rightAlign,
}: Props) => {
  return (
    <div
      css={[
        {
          display: 'flex',
          flexDirection: direction,
        },
        gapStyle(direction, gap),
        rightAlign && rightAlignStyle,
      ]}
      className={className}
    >
      {children}
    </div>
  );
};

export default ButtonGroup;

const gapStyle = (direction: 'row' | 'column', gap: number | string) => {
  const marginType = direction === 'row' ? 'marginLeft' : 'marginTop';
  return css({
    'button + button': {
      [marginType]: gap,
    },
  });
};

const rightAlignStyle = css`
  justify-content: flex-end;
`;
