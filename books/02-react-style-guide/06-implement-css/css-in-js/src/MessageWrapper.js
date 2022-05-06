import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const MessageStyle = styled.h1`
  font-size: 28px;
  color: red;

  &:hover {
    color: blue;
  }

  @media (max-width: 600px) {
    background-color: #bbdefb;
  }
`;

const Input = styled.input.attrs({
  type: 'text',
})`
  color: white;
  background: blue;
`;

const Info = styled.p`
  font-size: 24px;
  color: black;
`;

const InfoWarning = styled(Info)`
  color: red;
`;

const Link = styled.a`
  font-size: 24px;
  color: blue;
`;

const LinkButton = Link.withComponent('button');

const MessageWrapper = () => {
  return (
    <div>
      <Input size={30} />
      <MessageStyle>
        <Message msg="Hello Style!" />
      </MessageStyle>
      <Info>{'information'}</Info>
      <InfoWarning>Message Warning</InfoWarning>
      <LinkButton>Hello world!</LinkButton>
    </div>
  );
};

export default MessageWrapper;
