import React from 'react';
import styles from './CSSModule.module.css';
import classNames from 'classnames/bind';
import styled from 'styled-components';

const cx = classNames.bind(styles);

const Button = styled.button`
  color: red;
  width: 12rem;
`;

const CSSModule = () => {
  return (
    <>
      <div className={cx('wrapper', 'inverted')}>
        안녕하세요, 저는 <span className="something">CSS Module!</span>
      </div>
      <Button>ㅎㅇ</Button>
    </>
  );
};

export default CSSModule;
