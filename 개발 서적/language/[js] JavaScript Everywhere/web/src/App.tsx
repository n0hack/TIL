import Pages from './pages';
import GlobalStyle from '@components/GlobalStyle';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Layout from '@components/Layout';

// 컴포넌트 바깥에서 실행되는 건 전역 느낌으로 처음에만 실행됨
// 외부에 선언한 것은 하위 컴포넌트에서부터 호출되며, 컴포넌트 내부에 선언한 것들은 상위부터 호출됨
const uri = import.meta.env.VITE_API_URI;
const cache = new InMemoryCache();

const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <GlobalStyle />
        <Pages />
      </Layout>
    </ApolloProvider>
  );
}

export default App;
