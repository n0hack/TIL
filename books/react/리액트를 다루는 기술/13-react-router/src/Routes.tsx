import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";
import Profiles from "./Profiles";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profiles" element={<Profiles />}>
        <Route path=":username" element={<Profile />} />
      </Route>
    </ReactRoutes>
  );
};

export default Routes;
