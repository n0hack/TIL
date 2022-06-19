import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import GithubProfileInfo from "../components/GithubProfileInfo";
import GithubUsernameForm from "../components/GithubUsernameForm";
import { RootState } from "../modules";
import { getUserProfileThunk, GithubAction } from "../modules/github";

type Props = {};

function GithubProfileLoader({}: Props) {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.github.userProfile
  );
  const dispatch = useDispatch<ThunkDispatch<RootState, any, GithubAction>>();

  const onSubmitUsername = (username: string) =>
    dispatch(getUserProfileThunk(username));

  return (
    <>
      <GithubUsernameForm onSubmitUsername={onSubmitUsername} />
      {loading && <p style={{ textAlign: "center" }}>로딩중...</p>}
      {error && <p style={{ textAlign: "center" }}>에러 발생!</p>}
      {data && (
        <GithubProfileInfo
          bio={data.bio}
          blog={data.blog}
          name={data.name}
          thumbnail={data.avatar_url}
        />
      )}
    </>
  );
}

export default GithubProfileLoader;
