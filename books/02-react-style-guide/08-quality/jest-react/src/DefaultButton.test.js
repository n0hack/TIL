import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import DefaultButton from './DefaultButton';
import jsdomify from 'jsdomify';
import { shallow } from 'enzyme';

test('label', () => {
  const props = {
    onClick: () => {},
    label: 'foo',
  };
  // enzyme로 렌더링
  const wrapper = shallow(<DefaultButton {...props} />);

  // 리액트 요소인지 검증
  expect(wrapper.props().children).toBe(props.label);
});

test('onClick', () => {
  const props = {
    onClick: jest.fn(), // 모킹 함수
    label: 'foo',
  };
});
