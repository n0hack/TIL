import React from 'react';
import styled, { css } from 'styled-components';

type CategoriesProps = {
  category: CategoryName;
  onSelect: (category: CategoryName) => void;
};

export type CategoryName = 'all' | 'business' | 'entertainment' | 'health' | 'science' | 'sports' | 'technology';

export type TCategory = {
  name: CategoryName;
  text: string;
};

const categories: TCategory[] = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const Categories = ({ category, onSelect }: CategoriesProps) => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category key={c.name} $active={c.name === category} onClick={() => onSelect(c.name)}>
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled.div<{ $active: boolean }>`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  ${(props) =>
    props.$active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;

      &:hover {
        color: #3bc9db;
      }
    `}

  & + & {
    margin-left: 1rem;
  }
`;

export default Categories;
