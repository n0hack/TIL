import React, { useEffect, useRef } from 'react';
import Sample from '../components/Sample';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../modules';
import { getPost, getUsers } from '../modules/sample';

const SampleContainer = () => {
  const { loading, post, users } = useSelector((state: RootState) => state.sample);
  const dispatch = useDispatch<AppDispatch>();
  const flag = useRef(false);

  useEffect(() => {
    if (flag.current) return;

    // dispatch(getPost(1));
    // dispatch(getUsers());
    flag.current = true;
  }, [dispatch]);

  return <Sample loadingPost={loading.GET_POST} loadingUsers={loading.GET_USERS} post={post} users={users} />;
};

export default SampleContainer;
