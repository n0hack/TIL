import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

interface Props {}

const About = ({}: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <button onClick={() => setSearchParams("hello=5")}>click</button>
    </div>
  );
};

export default About;
