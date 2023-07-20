import { CodegenConfig } from '@graphql-codegen/cli';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const config: CodegenConfig = {
  schema: process.env.VITE_API_URI,
  documents: path.resolve(__dirname, 'src/gql/**/*.ts'),
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client',
    },
  },
};

export default config;
