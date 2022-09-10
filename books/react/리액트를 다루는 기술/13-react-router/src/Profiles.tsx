import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Profile from "./Profile";

interface Props {}

const Profiles = ({}: Props) => {
  return (
    <div>
      <h3>사용자 목록: </h3>
      <ul>
        <li>
          <Link to="/profiles/velopert">Velopert</Link>
        </li>
        <li>
          <Link to="/profiles/nohack">NoHack</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Profiles;
