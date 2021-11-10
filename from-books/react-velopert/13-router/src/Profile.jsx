import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const data = {
  velopert: { name: '김민준', description: '리액트를 좋아하는 개발자' },
  nohack: { name: '전지훈', description: '리액트를 공부하는 일반인' },
};

const Profile = () => {
  const { username } = useParams();
  const profile = data[username];
  const navigate = useNavigate();

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  const handleGoBack = () => {
    navigate(-1);
  };
  const handleGoHome = () => {
    navigate('/');
  };
  return (
    <div>
      <button onClick={handleGoBack}>뒤로가기</button>
      <button onClick={handleGoHome}>홈으로</button>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
