import React, { useRef, useState } from "react";
import { proxy, useSnapshot } from "valtio";
import LoginViewModel from "../viewmodel/LoginViewModel";

const Login = () => {
  const model = useRef(proxy(new LoginViewModel())).current;
  const state = useSnapshot(model);

  const edit = () => {
    model.user.name = "Dante";
  };

  return (
    <div>
      <p>{state.loading ? "로딩중" : "로딩아님"}</p>
      <div>id: {state.user.id}</div>
      <div>name: {state.user.name}</div>
      <div>email: {state.user.email}</div>
      <div>level: {state.user.level}</div>
      <div>gender: {state.user.gender.title}</div>
      <div>age: {state.user.age}</div>

      <p>{state.user.getAdultLabel()}</p>

      <button onClick={() => edit()}>수정</button>
    </div>
  );
};

export default Login;
