import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import { Article } from '../types/news';
import { client } from '../api/client';
import { CategoryName } from './Categories';

type NewsListProps = {
  category: CategoryName;
};

const NewsList = ({ category }: NewsListProps) => {
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await client.get(
          `/top-headlines?country=kr${query}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`,
        );
        // const response = await client.get(
        //   `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`,
        // );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((article, index) => (
        <NewsItem key={article.url + index} article={article} />
      ))}
    </NewsListBlock>
  );
};

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export default NewsList;
