import React from 'react';
import { graphql, PageProps } from 'gatsby';

const TypegenPage = ({ data }: PageProps<Queries.TypegenPageQuery>) => {
  console.log(data.site?.siteMetadata?.title);

  return (
    <main>
      <p>Site title: TODO</p>
      <hr />
      <p>Query Result:</p>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </main>
  );
};

export default TypegenPage;

export const query = graphql`
  # Pascal Case를 사용하는 것이 좋음
  query TypegenPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
