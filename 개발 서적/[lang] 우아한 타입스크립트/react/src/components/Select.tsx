import { styled } from 'styled-components';

const theme = {
  fontSize: {
    default: '16px',
    small: '14px',
    large: '18px',
  },
  color: {
    white: '#ffffff',
    black: '#000000',
  },
};

type Theme = typeof theme;

type FontSize = keyof Theme['fontSize'];
type Color = keyof Theme['color'];

type ReactSelectProps = React.ComponentPropsWithoutRef<'select'>;

interface SelectProps<OptionType extends Record<string, string>> extends Pick<ReactSelectProps, 'id' | 'key'> {
  options: OptionType;
  selectedOption?: keyof OptionType;
  onChange?: (selected?: keyof OptionType) => void;
  color?: Color;
  fontSize?: FontSize;
}

interface SelectStyleProps {
  color: Color;
  fontSize: FontSize;
}

/**
 * Select 컴포넌트
 * @param {Object} props - Select 컴포넌트로 넘겨주는 속성
 * @param {Object} props.options - { [key: string]: string } 형식으로 이루어진 option 객체
 * @param {string | undefined} props.selectedOption - 현재 선택된 option의 key값(optional)
 * @param {function} props.onChange - select 값이 변경되었을 때 불리는 callback 함수(optional)
 * @returns {JSX.Element}
 */
const Select = <OptionType extends Record<string, string>>({
  onChange,
  options,
  selectedOption,
  fontSize = 'default',
  color = 'black',
}: SelectProps<OptionType>): JSX.Element => {
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const selected = Object.entries(options).find(([_, value]) => value === e.target.value)?.[0];
    onChange?.(selected);
  };

  return (
    <StyledSelect
      onChange={handleChange}
      value={selectedOption && options[selectedOption]}
      fontSize={fontSize}
      color={color}
    >
      {Object.entries(options).map(([key, value]) => (
        <option key={key} value={value}>
          {value}
        </option>
      ))}
    </StyledSelect>
  );
};

const StyledSelect = styled.select<SelectStyleProps>`
  color: ${({ color }) => theme.color[color]};
  font-size: ${({ fontSize }) => theme.fontSize[fontSize]};
`;

export default Select;
