import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 20px;
  }
`;

const Info = ({ data }: PageProps<Queries.MetadataQuery>) => {
  const { title, description, author } = data.site?.siteMetadata!;
  return (
    <div>
      <Global styles={globalStyle} />
      <div css={TextStyle}>{title}</div>
      <Text1 disable>{description}</Text1>
      <Text2 disable>{author}</Text2>
    </div>
  );
};

export default Info;

export const query = graphql`
  query Metadata {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const TextStyle = css`
  font-size: 18px;
  font-weight: 700;
  color: gray;
`;

const Text1 = styled.div<{ disable: boolean }>`
  font-size: 20px;
  font-weight: 700;
  text-decoration: ${({ disable }) => (disable ? 'line-through' : 'none')};
`;

const Text2 = styled('div')<{ disable: boolean }>(({ disable }) => ({
  fontSize: '15px',
  color: 'blue',
  textDecoration: disable ? 'line-through' : 'none',
}));
