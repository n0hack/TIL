import { useQuery } from '@apollo/client';
import Button from '@components/Button';
import NoteFeed from '@components/NoteFeed';
import { ReadNoteFeedDocument } from '@gql/graphql';
import React from 'react';

const Home = () => {
  const { data, loading, error, fetchMore } = useQuery(ReadNoteFeedDocument);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error!</p>;

  return (
    <React.Fragment>
      <NoteFeed notes={data?.readNoteFeed?.notes!} />
      {data?.readNoteFeed?.hasNextPage && (
        <Button
          onClick={() =>
            fetchMore({
              variables: { cursor: data.readNoteFeed?.cursor },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                return {
                  readNoteFeed: {
                    __typename: 'NoteFeed',
                    cursor: fetchMoreResult?.readNoteFeed?.cursor!,
                    hasNextPage: fetchMoreResult?.readNoteFeed?.hasNextPage!,
                    notes: [...previousResult.readNoteFeed?.notes!, ...fetchMoreResult?.readNoteFeed?.notes!],
                  },
                };
              },
            })
          }
        >
          Load more
        </Button>
      )}
    </React.Fragment>
  );
};

export default Home;
