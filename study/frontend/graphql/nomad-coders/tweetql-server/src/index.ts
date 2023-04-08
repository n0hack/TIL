import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// 스키마
// Scalar Types: String, Boolean, Int, Float, ID와 같이 내장된 타입들
const typeDefs = `#graphql
  type User {
    id: ID!
    username: String!
    firstName: String!
    lastName: String!
  }

  type Tweet { 
    id: ID!
    text: String!
    author: User
  }

  # REST에서 GET에 대한 것을 정의
  type Query {
    allTweets: [Tweet!]!
    # Arguments (!가 붙으면 non-nullable)
    tweet(id: ID!): Tweet
  }

  # 유저가 보낸 데이터로 mutate하는 모든 것을 정의 (POST, PUT, DELETE 등)
  type Mutation {
    postTweet(text: String!, userId: ID!): Tweet!
    deleteTweet(id: ID!): Boolean!
  }
`;

// 데이터셋
const tweets = [
  {
    id: '1',
    text: 'First One!',
  },
  {
    id: '2',
    text: 'Second One!',
  },
];

// 리졸버 (스키마와 형태가 동일해야 함)
const resolvers = {
  Query: {
    allTweets: () => tweets,
    tweet: (root: any, args: { id: string }) => tweets.find((tweet) => tweet.id === args.id),
  },
};

// 서버 구축
const server = new ApolloServer({ typeDefs, resolvers });
(async () => {
  const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
  console.log(`🚀  Server ready at: ${url}`);
})();
