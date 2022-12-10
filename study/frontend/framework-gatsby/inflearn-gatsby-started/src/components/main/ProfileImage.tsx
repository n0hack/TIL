import styled from '@emotion/styled';
import React from 'react';

const PROFILE_IMAGE_LINK = 'https://cdn.gamemeca.com/gmboard/mobile_free/2022/03/21/20220321155712_599870.gif';

const ProfileImage = () => {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile" />;
};

export default ProfileImage;

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;
