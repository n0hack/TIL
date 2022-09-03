import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import IndexPage from "./IndexPage";
import LoginPage from "./LoginPage";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />
    </ReactRoutes>
  );
};

export default Routes;
