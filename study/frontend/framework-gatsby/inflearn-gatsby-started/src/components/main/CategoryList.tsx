import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

interface Props {
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  };
}

interface GatsbyLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
  active: boolean;
}

const CategoryList = ({ selectedCategory, categoryList }: Props) => {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem to={`/?category=${name}`} active={name === selectedCategory} key={name}>
          #{name}({count})
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  );
};

export default CategoryList;

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 100px auto 0;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`;

const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => <Link {...props} />)`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
