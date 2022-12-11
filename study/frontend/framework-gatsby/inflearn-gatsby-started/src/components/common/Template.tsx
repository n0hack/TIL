import styled from '@emotion/styled';
import React from 'react';
import Footer from './Footer';
import GlobalStyle from './GlobalStyle';

interface Props {
  children?: React.ReactNode;
}

const Template = ({ children }: Props) => {
  return (
    <Container>
      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  );
};

export default Template;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
