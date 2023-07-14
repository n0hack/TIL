import { graphql, PageProps } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../../components/Layout';

export default function ProductDetial({
  data,
}: PageProps<Queries.ProductQuery>) {
  const image = getImage(data.contentfulStickerPack?.preview!);

  return (
    <Layout title={data.contentfulStickerPack?.name!}>
      <GatsbyImage
        image={image as IGatsbyImageData}
        alt={data.contentfulStickerPack?.name!}
      />
      <h2>${data.contentfulStickerPack?.price}</h2>
    </Layout>
  );
}

export const query = graphql`
  query Product($id: String) {
    contentfulStickerPack(id: { eq: $id }) {
      name
      price
      preview {
        gatsbyImageData(height: 350)
      }
    }
  }
`;
