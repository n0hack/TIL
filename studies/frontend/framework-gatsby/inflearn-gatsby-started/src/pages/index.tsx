import { graphql, PageProps } from 'gatsby';
import styled from '@emotion/styled';
import GlobalStyle from '@components/common/GlobalStyle';
import Introduction from '@components/main/Introduction';
import Footer from '@components/common/Footer';
import CategoryList from '@components/main/CategoryList';
import PostList from '@components/main/PostList';
import { useMemo } from 'react';
import Template, { TemplateProps } from '@components/common/Template';

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
};

const Index = (props: PageProps<Queries.getPostListQuery>) => {
  const selectedCategory = props.location.search.split('=')[1] ?? 'All';
  const categoryList = useMemo(() => {
    return props.data.allMarkdownRemark.edges.reduce(
      (list: { [index: string]: number }, { node: { frontmatter } }) => {
        if (frontmatter && frontmatter.categories) {
          frontmatter.categories.forEach(category => {
            if (typeof category === 'string') {
              if (list[category] === undefined) list[category] = 1;
              else list[category] += 1;
            }
          });
          list['All']++;
        }
        return list;
      },
      { All: 0 },
    );
  }, []);
  const { file } = props.data;

  return (
    <Template
      title={props.data.site?.siteMetadata?.title!}
      description={props.data.site?.siteMetadata?.description!}
      url={props.data.site?.siteMetadata?.siteUrl!}
      image={file?.publicURL!}
    >
      <Introduction profileImage={file?.childImageSharp?.gatsbyImageData!} />
      <CategoryList selectedCategory={selectedCategory} categoryList={categoryList} />
      <PostList posts={props.data.allMarkdownRemark.edges} selectedCategory={selectedCategory} />
    </Template>
  );
};

export default Index;

export const getPostList = graphql`
  query getPostList {
    site {
      siteMetadata {
        description
        siteUrl
        title
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData
      }
      publicURL
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            categories
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            thumbnail {
              childrenImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;

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
