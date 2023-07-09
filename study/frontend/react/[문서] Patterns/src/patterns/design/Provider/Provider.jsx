import React from 'react';

// 공급자 패턴은 전역 데이터를 공유할 때 매우 유용함
// Prop Drilling이 해결된다는 장점이 있지만, Provider가 많아질 수록 렌더링을 더 신경써야 함
const DataContext = React.createContext();

export default DataContext;
