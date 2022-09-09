import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "./Routes";
import { Link, NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : undefined)}>
            홈
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : undefined)}>
            소개
          </NavLink>
        </li>
        <li>
          <NavLink to="/profiles" className={({ isActive }) => (isActive ? "active" : undefined)}>
            프로필
          </NavLink>
        </li>
      </ul>
      <hr />
      <Routes />
    </div>
  );
}

export default App;
