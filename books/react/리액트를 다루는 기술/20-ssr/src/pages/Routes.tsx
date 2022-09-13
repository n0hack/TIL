import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import BluePage from "./BluePage";
import RedPage from "./RedPage";

interface Props {}

const Routes = ({}: Props) => {
  return (
    <ReactRoutes>
      <Route path="/red" element={<RedPage />} />
      <Route path="/blue" element={<BluePage />} />
    </ReactRoutes>
  );
};

export default Routes;
