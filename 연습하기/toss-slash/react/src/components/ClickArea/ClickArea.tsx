import { PropsWithChildren } from 'react';
import Style, { generateClassName } from '../../utils/Style';
import classnames from 'classnames';
import { noop } from '../../utils/noop';

type ClickAreaProps = {
  className?: string;
  onClick?: () => void;
  /**
   * @default true
   */
  enabled?: boolean;
};

export const ClickArea = ({ className, children, onClick, enabled = true }: PropsWithChildren<ClickAreaProps>) => {
  return (
    <Style css={css}>
      <a
        role="button"
        className={classnames(className, CLASSNAMES.clickArea, { [CLASSNAMES.enabled]: enabled })}
        // iOS에서 :active 선택자가 작동하지 않아 사용하는 Hack
        onTouchStart={noop}
        onClick={enabled ? onClick : undefined}
      >
        {children}
      </a>
    </Style>
  );
};

const CLASSNAMES = generateClassName({
  clickArea: 'click-area',
  enabled: 'click-area__enabled',
});

const css = `
.${CLASSNAMES.clickArea} {
  position: relative;
  display: block;
}
.${CLASSNAMES.enabled}::after {
  position: absolute;
  content: ' ';
  background-color: transparent;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: background-color 0.1s ease-in-out;
}
.${CLASSNAMES.enabled}:active::after {
  background-color: rgba(0, 0, 0, 0.04);
}
`;
