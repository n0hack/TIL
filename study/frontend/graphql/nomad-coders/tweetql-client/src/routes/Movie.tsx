import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';

const GET_MOVIE = gql`
  query ($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      background_image
    }
  }
`;

const Movie = () => {
  const params = useParams<{ id: string }>();
  const { data, loading, error } = useQuery(GET_MOVIE, {
    variables: {
      movieId: params.id,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{data.movie.title}</h1>
      <img src={data.movie.background_image} style={{ objectFit: 'cover', width: 500 }} />
    </div>
  );
};

export default Movie;
