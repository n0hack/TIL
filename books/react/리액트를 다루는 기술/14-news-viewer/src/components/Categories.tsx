import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { NEWS_CATEGORIES } from '../constants/News';

const Categories = () => {
  return (
    <CategoriesBlock>
      {NEWS_CATEGORIES.map((c) => (
        <Category
          key={c.name}
          className={({ isActive }) => (isActive ? 'active' : '')}
          to={c.name === 'general' ? '/' : `/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;

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

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;
