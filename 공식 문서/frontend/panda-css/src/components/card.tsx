import { css, Styles } from '../../styled-system/css';

type CardProps = {
  title: string;
  description: string;
  css: Styles;
};

const cardStyle = css.raw({
  bg: 'amber.600',
  color: 'white',
  p: 4,
});

export const Card = ({ description, title, css: cssProp }: CardProps) => {
  return (
    <div className={css(cardStyle, cssProp)}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
