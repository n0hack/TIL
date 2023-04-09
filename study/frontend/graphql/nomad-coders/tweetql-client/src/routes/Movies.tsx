import { gql, useApolloClient, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      title
      id
    }
    allTweets {
      id
      text
      author {
        fullName
      }
    }
  }
`;

const Movies = () => {
  const { data, loading, error } = useQuery(ALL_MOVIES);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Could not fetch!</div>;
  }

  console.log(data);

  return (
    <ul>
      <h1>Movies</h1>
      {data.allMovies.map((movie: any) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
      <h1>Tweets</h1>
      {data.allTweets.map((tweet: any) => (
        <li key={tweet.id}>
          {tweet.text} / by: {tweet.author.fullName}
        </li>
      ))}
    </ul>
  );
};

export default Movies;
