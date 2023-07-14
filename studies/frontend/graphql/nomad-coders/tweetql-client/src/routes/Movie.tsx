import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const GET_MOVIE = gql`
  query ($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      medium_cover_image
      rating
      isLiked @client
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const Image = styled.div<{ bg: string }>`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
`;

const Movie = () => {
  const params = useParams<{ id: string }>();
  const {
    data,
    loading,
    error,
    client: { cache },
  } = useQuery(GET_MOVIE, {
    variables: {
      movieId: params.id,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const onClick = () => {
    // 로컬 캐시를 변경하는 것
    cache.writeFragment({
      id: `Movie:${params.id}`,
      fragment: gql`
        fragment MovieFragment on Movie {
          title
          rating
          isLiked
        }
      `,
      data: {
        title: 'Hello',
        rating: 10,
        isLiked: !data.movie.isLiked,
      },
    });
  };

  return (
    <Container>
      <Column>
        <Title>{loading ? 'Loading...' : `${data.movie?.title}`}</Title>
        <Subtitle>⭐️ {data?.movie?.rating}</Subtitle>
        <button onClick={onClick}>{data.movie.isLiked ? 'Unlike' : 'Like'}</button>
      </Column>
      <Image bg={data?.movie?.medium_cover_image} />
    </Container>
  );
};

export default Movie;
