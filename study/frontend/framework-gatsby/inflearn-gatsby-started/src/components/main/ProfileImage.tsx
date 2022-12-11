import styled from '@emotion/styled';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

interface Props {
  profileImage: IGatsbyImageData;
}

const ProfileImage = ({ profileImage }: Props) => {
  return <ProfileImageWrapper image={profileImage} alt="Profile" />;
};

export default ProfileImage;

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;
