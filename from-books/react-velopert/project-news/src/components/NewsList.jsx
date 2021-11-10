import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding {
      left: 1rem;
      right: 1rem;
    }
  }
`;

const sampleArticles = [
  {
    title: '제목1',
    description: '리액트',
    url: 'https://www.naver.com/1',
    urlToImage: 'https://via.placeholder.com/160x100',
  },
  {
    title: '제목2',
    description: '리액트',
    url: 'https://www.naver.com/2',
    urlToImage: 'https://via.placeholder.com/160x100',
  },
  {
    title: '제목3',
    description: '리액트',
    url: 'https://www.naver.com/3',
    urlToImage: 'https://via.placeholder.com/160x100',
  },
  {
    title: '제목4',
    description: '리액트',
    url: 'https://www.naver.com/4',
    urlToImage: 'https://via.placeholder.com/160x100',
  },
];

const getArticle = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(sampleArticles);
    }, 3000);
  });

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=a575813e7bb44d58bf7b16f57cba651d`
    );
  }, [category]);
  // const [loading, setLoading] = useState(false);
  // const [articles, setArticles] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const query = category === 'all' ? '' : `&category=${category}`;
  //       const response = await axios.get(
  //         `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=a575813e7bb44d58bf7b16f57cba651d`
  //       );
  //       setArticles(response.data.articles);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [category]);

  if (loading) return <NewsListBlock>대기 중...</NewsListBlock>;

  if (!response) return null;

  if (error) return <NewsListBlock>에러 발생!</NewsListBlock>;

  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
