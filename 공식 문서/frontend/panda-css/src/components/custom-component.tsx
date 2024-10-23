import { css, cx } from '../../styled-system/css';
import { splitCssProps } from '../../styled-system/jsx';
import type { HTMLStyledProps } from '../../styled-system/types';

export const CustomComponent = (props: HTMLStyledProps<'div'> & { test: string }) => {
  const [cssProps, restProps] = splitCssProps(props);
  const { css: cssProp, ...styleProps } = cssProps;

  const className = css({ display: 'flex', height: '20', width: '20' }, styleProps, cssProp);

  return (
    <div {...restProps} className={cx(className, restProps.className)}>
      CustomComponent
    </div>
  );
};
