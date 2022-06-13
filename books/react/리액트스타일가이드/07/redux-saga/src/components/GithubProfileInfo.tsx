import React from "react";
import "./GithubProfileInfo.scss";

type Props = {
  name: string;
  thumbnail: string;
  bio: string;
  blog: string;
};

function GithubProfileInfo({ name, thumbnail, bio, blog }: Props) {
  return (
    <div className="GithubProfileInfo">
      <div className="profile-head">
        <img src={thumbnail} alt="user thumbnail" />
        <div className="name">{name}</div>
      </div>
      <p>{bio}</p>
      <div>{blog !== "" && <a href={`https://${blog}`}>블로그</a>}</div>
    </div>
  );
}

export default GithubProfileInfo;
