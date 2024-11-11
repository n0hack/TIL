import { makeExecutableSchema } from '@graphql-tools/schema'
import axios from 'axios';

const typeDefinitions = `
  type Query {
    hello: String!
    info: String!
    logs: [Log!]!
    products: [Product!]!
    feed: [Link!]!
  }
 
  type Log {
    service: String!
    application: String!
    screen: String!
    event: String!
    user: String!
  }

  type Product {
    id: ID!
    productName: String!
    price: Int!
    detailDescription: String!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }
`

type Link = {
  id: string
  url: string
  description: string
}

type Log = {
  service: string;
  application: string;
  screen: string;
  event: string;
  user: string;
}

type Product = {
  id: string;
  productName: string;
  price: number;
  detailDescription: string;
}

const links: Link[] = [
  {
    id: 'link-0',
    url: 'https://graphql-yoga.com',
    description: 'The easiest way of setting up a GraphQL server',
  },
]

const resolvers = {
  Query: {
    hello: () => 'Hello World!',
    info: () => `This is the API of a Hackernews Clone`,
    logs: async () => {
      const response = await axios('http://localhost:1205/api/logs')
      return response.data;
    },
    products: async () => {
      const response = await axios('http://localhost:1202/products')
      return response.data;
    },
    feed: () => links,
  },
  Link: {
    id: (parent: Link) => parent.id,
    description: (parent: Link) => parent.description,
    url: (parent: Link) => parent.url,
  },
}

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions],
})
