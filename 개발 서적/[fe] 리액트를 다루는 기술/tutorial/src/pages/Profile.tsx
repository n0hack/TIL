import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const data = {
  lucid: {
    name: 'Lucid',
    description: '리액트를 좋아하는 개발자',
  },
  gildong: {
    name: '홍길동',
    description: '고전 소설 홍길동전의 주인공',
  },
};

const Profile = () => {
  const { username } = useParams<{ username: string }>();
  const profile = data[username as keyof typeof data];
  const [searchParams, setSearchParams] = useSearchParams();

  const showDetail = searchParams.get('detail') === 'true';

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
      {showDetail && <p>detail 값이 true로 설정되었습니다.</p>}
    </div>
  );
};

export default Profile;
