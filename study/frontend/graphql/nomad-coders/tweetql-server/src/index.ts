import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

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
    allUsers: [User!]!
    allTweets: [Tweet!]!
    # Arguments (!가 붙으면 non-nullable)
    tweet(id: ID!): Tweet
  }

  # 유저가 보낸 데이터로 mutate하는 모든 것을 정의 (POST, PUT, DELETE 등)
  type Mutation {
    postTweet(text: String!, userId: ID!): Tweet!
    """트윗 삭제"""
    deleteTweet(id: ID!): Boolean!
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
    allUsers: () => {
      console.log('All Users Resolver Called!');
      return users;
    },
    allTweets: () => tweets,
    tweet: (root: any, args: { id: string }) => tweets.find((tweet) => tweet.id === args.id),
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
  const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
  console.log(`🚀  Server ready at: ${url}`);
})();
