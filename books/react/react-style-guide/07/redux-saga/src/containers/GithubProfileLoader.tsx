import React from "react";
import { useSelector, useDispatch } from "react-redux";
import GithubProfileInfo from "../components/GithubProfileInfo";
import GithubUsernameForm from "../components/GithubUsernameForm";
import { RootState } from "../modules";
import * as actions from "../modules/github/actions";

type Props = {};

const GithubProfileLoader = (props: Props) => {
  const { loading, data, error } = useSelector((state: RootState) => state.github.userProfile);
  const dispatch = useDispatch();

  const onSubmitUsername = (username: string) => {
    dispatch(actions.request(username));
  };

  return (
    <>
      <GithubUsernameForm onSubmitUsername={onSubmitUsername} />
      {loading && <p style={{ textAlign: "center" }}>로딩중...</p>}
      {error && <p style={{ textAlign: "center" }}>에러 발생!</p>}
      {data && <GithubProfileInfo name={data.name} bio={data.bio} blog={data.blog} thumbnail={data.avatar_url} />}
    </>
  );
};

export default GithubProfileLoader;
