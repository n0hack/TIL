import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import axios from 'axios';

// 스키마
// Scalar Types: String, Boolean, Int, Float, ID와 같이 내장된 타입들
const typeDefs = `#graphql
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    """
    Is the sum of firstName and lastName
    """
    fullName: String!
  }

  """
  Tweet object represents a resource for a Tweet
  """
  type Tweet { 
    id: ID!
    text: String!
    author: User
  }

  # REST에서 GET에 대한 것을 정의
  type Query {
    allMovies: [Movie!]!
    allUsers: [User!]!
    allTweets: [Tweet!]!
    # Arguments (!가 붙으면 non-nullable)
    tweet(id: ID!): Tweet
    movie(id: String!): Movie
  }

  # 유저가 보낸 데이터로 mutate하는 모든 것을 정의 (POST, PUT, DELETE 등)
  type Mutation {
    postTweet(text: String!, userId: ID!): Tweet!
    """트윗 삭제"""
    deleteTweet(id: ID!): Boolean!
  }

  type Movie {
    id: Int!
    url: String!
    imdb_code: String!
    title: String!
    title_english: String!
    title_long: String!
    slug: String!
    year: Int!
    rating: Float!
    runtime: Float!
    genres: [String!]!
    summary: String!
    description_full: String!
    synopsis: String!
    yt_trailer_code: String!
    language: String!
    background_image: String!
    background_image_original: String!
    small_cover_image: String!
    medium_cover_image: String!
    large_cover_image: String!
  }
`;

// 데이터셋
const users = [
  {
    id: '1',
    firstName: 'Lucid',
    lastName: 'Jeon',
  },
  {
    id: '2',
    firstName: 'Jihun',
    lastName: 'Jeon',
  },
];

const tweets = [
  {
    id: '1',
    text: 'First One!',
    userId: '2',
  },
  {
    id: '2',
    text: 'Second One!',
    userId: '1',
  },
];

// 리졸버 (스키마와 형태가 동일해야 함)
const resolvers = {
  Query: {
    allMovies: async () => {
      const { data } = await axios.get('https://yts.mx/api/v2/list_movies.json/yts-proxy.now.sh/list_movies.json');
      return data.data.movies;
    },
    allUsers: () => {
      console.log('All Users Resolver Called!');
      return users;
    },
    allTweets: () => tweets,
    tweet: (root: any, args: { id: string }) => tweets.find((tweet) => tweet.id === args.id),
    movie: async (_: any, args: { id: string }) => {
      const { data } = await axios.get(
        `https://yts.mx/api/v2/movie_details.json/yts-proxy.now.sh/movie_details.json?movie_id=${args.id}`
      );
      return data.data.movie;
    },
  },
  Mutation: {
    postTweet(_: any, { text, userId }: any) {
      const newTweet = {
        id: (tweets.length + 1).toString(),
        text,
        userId,
      };
      tweets.push(newTweet);
      return newTweet;
    },
    deleteTweet(_: any, { id }: any) {
      const index = tweets.findIndex((tweet) => tweet.id === id);
      if (index !== -1) {
        tweets.splice(index, 1);
        return true;
      }
      return false;
    },
  },
  // Dynamic Resolver
  User: {
    firstName: ({ firstName }: { firstName: string }) => firstName,
    fullName: (root: { firstName: string; lastName: string }) => {
      // Root Resolver가 출력됨
      console.log(root);
      console.log('Full Name Resolver Called!');
      return `${root.firstName} ${root.lastName}`;
    },
  },
  Tweet: {
    author: ({ userId }: { userId: string }) => users.find((user) => user.id === userId),
  },
};

// 서버 구축
const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (formattedError, error) => {
    console.log(error);
    return formattedError;
  },
});
(async () => {
  const { url } = await startStandaloneServer(server, { listen: { port: 52273 } });
  console.log(`🚀  Server ready at: ${url}`);
})();
