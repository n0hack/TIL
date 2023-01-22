import React from 'react';
import styled from 'styled-components';
import {
  ToolbarBoldIcon,
  ToolbarCodeIcon,
  ToolbarItalicIcon,
  ToolbarLinkIcon,
  ToolbarPhotoIcon,
  ToolbarQuoteIcon,
  ToolbarStrikeThroughIcon,
} from '../../static/svg';

export type ToolbarMode =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'bold'
  | 'italic'
  | 'strike'
  | 'quote'
  | 'link'
  | 'photo'
  | 'code';

interface ToolbarProps {
  onClick?: (mode: ToolbarMode) => void;
}

export default function Toolbar({ onClick }: ToolbarProps) {
  return (
    <ToolbarBlock>
      <ToolbarItem onClick={() => onClick?.('heading1')}>
        H<span>1</span>
      </ToolbarItem>
      <ToolbarItem onClick={() => onClick?.('heading2')}>
        H<span>2</span>
      </ToolbarItem>
      <ToolbarItem onClick={() => onClick?.('heading3')}>
        H<span>3</span>
      </ToolbarItem>
      <ToolbarItem onClick={() => onClick?.('heading4')}>
        H<span>4</span>
      </ToolbarItem>
      <Seperator />
      <ToolbarItem onClick={() => onClick?.('bold')}>
        <ToolbarBoldIcon />
      </ToolbarItem>
      <ToolbarItem onClick={() => onClick?.('italic')}>
        <ToolbarItalicIcon />
      </ToolbarItem>
      <ToolbarItem onClick={() => onClick?.('strike')}>
        <ToolbarStrikeThroughIcon />
      </ToolbarItem>
      <Seperator />
      <ToolbarItem onClick={() => onClick?.('quote')}>
        <ToolbarQuoteIcon />
      </ToolbarItem>
      <ToolbarItem onClick={() => onClick?.('link')}>
        <ToolbarLinkIcon />
      </ToolbarItem>
      <ToolbarItem onClick={() => onClick?.('photo')}>
        <ToolbarPhotoIcon />
      </ToolbarItem>
      <ToolbarItem onClick={() => onClick?.('code')}>
        <ToolbarCodeIcon />
      </ToolbarItem>
    </ToolbarBlock>
  );
}

const ToolbarBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0 3rem;
`;

const ToolbarItem = styled.button`
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
  font-family: 'Fira Mono', sans-serif;
  font-weight: 500;
  font-size: 1.125rem;
  color: #8f8f8f;

  &:hover {
    color: #333;
    background: #e8e8e8;
  }

  span {
    font-size: 0.875rem;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 auto;
  }
`;

const Seperator = styled.div`
  width: 1px;
  height: 1.25rem;
  margin: 0 0.5rem;
  background-color: #d8d8d8;
`;
