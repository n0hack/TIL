import { css } from '../../styled-system/css';

type ListProps = {
  list: string[];
};

export const List = ({ list }: ListProps) => {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index} className={css({ _first: { color: 'red.500' } })}>
          {item}
        </li>
      ))}
    </ul>
  );
};
