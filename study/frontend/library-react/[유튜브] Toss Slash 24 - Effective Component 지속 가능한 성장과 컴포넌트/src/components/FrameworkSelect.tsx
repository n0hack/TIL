import React, { useState } from 'react';
import Select from './Select';

interface Props {}

const FrameworkSelect = ({}: Props) => {
  const {
    data: { frameworks },
  } = useFrameworks();

  const [selected, change] = useState();

  // Select 컴포넌트와 InputButton 컴포넌트를 분리하여 재사용성을 높임 (서로를 서로가 알지 못 함)
  // Trigger가 변경되더라도, Select 컴포넌트는 변경되지 않음
  return <Select trigger={<InputButton value={selected} />} onChange={change} value={selected} options={frameworks} />;
};

export default FrameworkSelect;
