import { AnyAction, AsyncThunk, AsyncThunkAction } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { AppDispatch, useAppDispatch } from "..";
import Sample from "../components/Sample";
import { RootState } from "../modules";
import { getPost } from "../modules/sample";

interface Props {}

const SampleContainer = ({}: Props) => {
  const {
    loading: { GET_POST: loadingPost, GET_USERS: loadingUsers },
    post,
    users,
  } = useSelector((state: RootState) => state.sample!);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPost(1) as any);
  }, [dispatch]);

  return <Sample post={post} loadingPost={loadingPost} />;
};

export default SampleContainer;
