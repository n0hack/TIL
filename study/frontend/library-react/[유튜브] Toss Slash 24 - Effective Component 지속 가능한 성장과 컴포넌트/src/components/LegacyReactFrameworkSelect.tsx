import React, { useState } from 'react';

interface Props {
  defaultValue: string;
}

const ReactFrameworkSelect = ({ defaultValue }: Props) => {
  const [isOpen, open, close] = useBoolean();
  const [selected, change] = useState(defaultValue);

  return (
    <>
      {/* Input이 아닌 라벨을 사용하고 싶을 때, 변경에 유연하지 않음 */}
      {/* Dropdown.Trigger */}
      <InputButton label="React Framework" value={selected} onClick={open} />
      {/* isOpen -> Dropdown */}
      {isOpen ? (
        // Dropdown.Menu
        <Options onClose={close}>
          {options.map((value) => (
            // Dropdown.Item 별도의 아이템으로 분리하여 상호작용을 담당
            <Button selected={selected === value} onClick={() => change(value)}>
              {value}
            </Button>
          ))}
        </Options>
      ) : null}
    </>
  );
};

export default ReactFrameworkSelect;
