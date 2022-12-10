import { PageProps } from 'gatsby';
import styled from '@emotion/styled';
import GlobalStyle from '@components/common/GlobalStyle';
import Introduction from '@components/main/Introduction';
import Footer from '@components/common/Footer';
import CategoryList from '@components/main/CategoryList';
import PostList from '@components/main/PostList';

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
};

const Index = ({ serverData }: PageProps) => {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList />
      <Footer />
    </Container>
  );
};

export default Index;

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breed/shiba/images/random`);
    if (!res.ok) {
      throw new Error(`Response failed`);
    }
    return {
      props: await res.json(),
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
