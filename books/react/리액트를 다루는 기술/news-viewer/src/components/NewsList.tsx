import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import usePromise from '../libs/usePromise';
import { Category, News, NewsData } from '../types/News';
import NewsItem from './NewsItem';

interface Props {
  category: Category | undefined;
}

const NewsList = ({ category }: Props) => {
  const [loading, response, error] = usePromise<NewsData>(() => {
    const query = category === undefined ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=a575813e7bb44d58bf7b16f57cba651d`
    );
  }, [category]);

  if (loading) return <NewsListBlock>대기 중...</NewsListBlock>;
  if (error) return null;
  if (!response) return null;

  return (
    <NewsListBlock>
      {response?.articles?.map((article) => (
        <NewsItem article={article} key={article.title!} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

const sampleArticle = {
  title: '제목',
  description: '테스트',
  url: 'google.com',
  urlToImage:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZYwt5BvVYck61V-vo6VV2Xw65YT6PQhYB9w&usqp=CAU',
};
