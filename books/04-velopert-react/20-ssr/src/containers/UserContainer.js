import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import User from '../components/User';
import { Preloader, usePreloader } from '../lib/PreloadContext';
import { getUser } from '../modules/users';

const UserContainer = ({ id }) => {
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  // 서버 사이드 렌더링 시 API 호출
  usePreloader(() => dispatch(getUser(id)));
  useEffect(() => {
    // 유저가 존재하고, 아이디가 일치한다면 요청 x
    if (user && user.id === parseInt(id, 10)) return;
    dispatch(getUser(id));
  });

  if (!user) return null;
  return <User user={user} />;
};

export default UserContainer;
