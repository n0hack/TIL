import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import { Category } from '../types/News';

interface Props {}

const NewsPage = ({}: Props) => {
  const { category } = useParams<{ category: Category }>();

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
