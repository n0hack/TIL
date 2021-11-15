import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Sample from '../components/Sample';
import { getPost, getUsers } from '../modules/sample';

const ContainerSample = ({
  post,
  users,
  loadingPost,
  loadingUsers,
  getPost,
  getUsers,
}) => {
  useEffect(() => {
    const fn = async () => {
      try {
        await getPost(1);
        await getUsers();
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [getPost, getUsers]);

  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default connect(
  ({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: loading['sample/GET_POST'],
    loadingUsers: loading['sample/GET_USERS'],
  }),
  { getPost, getUsers }
)(ContainerSample);
