import React, { useState } from "react";
import { proxy, useSnapshot } from "valtio";
import User from "../entity/user/User";

const model = proxy(new User());

const Login = () => {
  const state = useSnapshot(model);

  const edit = () => {
    model.name = "Dante";
  };

  return (
    <div>
      <div>id: {state.id}</div>
      <div>name: {state.name}</div>
      <div>email: {state.email}</div>
      <div>level: {state.level}</div>
      <div>gender: {state.gender}</div>
      <div>age: {state.age}</div>

      <p>{state.getAdultLabel()}</p>

      <button onClick={() => edit()}>수정</button>
    </div>
  );
};

export default Login;
