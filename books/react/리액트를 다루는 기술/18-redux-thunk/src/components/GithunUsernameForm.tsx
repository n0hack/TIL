import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../modules";

interface Props {}

const GithunUsernameForm = ({}: Props) => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.github?.userProfile!
  );
  console.log(data, loading, error);
  return <div>GithunUsernameForm</div>;
};

export default GithunUsernameForm;
