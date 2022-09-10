import React from "react";
import { useParams } from "react-router-dom";

interface Props {}

interface Params {
  username?: string;
}

const data = {
  velopert: { name: "김민준", description: "리액트를 좋아하는 개발자" },
  nohack: { name: "전지훈", description: "리액트를 좋아하는 개발자 2" },
};

const Profile = ({}: Props) => {
  const { username } = useParams<{ username?: "velopert" | "nohack" }>();
  const profile = username === undefined ? undefined : data[username];
  console.log(profile);

  if (!profile) {
    return <div>존재하지 않는 사용자</div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
