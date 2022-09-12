import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { getPost } from "../modules/sample";

interface Props {}

const SampleContainer = ({}: Props) => {
  const { post } = useSelector((state: RootState) => state.sample);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(1));
  }, [dispatch]);

  return <div>{post.body}</div>;
};

export default SampleContainer;
