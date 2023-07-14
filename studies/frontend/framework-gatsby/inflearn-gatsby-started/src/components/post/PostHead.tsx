import styled from '@emotion/styled';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import PostHeadInfo from './PostHeadInfo';

interface GatsbyImgProps {
  image: IGatsbyImageData;
  alt: string;
  className?: string;
}

interface Props {
  title: string;
  date: string;
  categories: string[];
  thumbnail: IGatsbyImageData;
}

const PostHead = ({ thumbnail, ...rest }: Props) => {
  return (
    <PostHeadWrapper>
      <BackgroundImage image={thumbnail} alt="thumbnail" />
      <PostHeadInfo {...rest} />
    </PostHeadWrapper>
  );
};

export default PostHead;

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const BackgroundImage = styled((props: GatsbyImgProps) => <GatsbyImage {...props} style={{ position: 'absolute' }} />)`
  z-index: -1;
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(0.25);

  @media (max-width: 768px) {
    height: 300px;
  }
`;
