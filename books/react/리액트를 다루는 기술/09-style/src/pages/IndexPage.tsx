import Button from "@components/Button";
import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const IndexPage = () => {
  return (
    <div>
      <Button>
        <Link to="/login">로그인하기</Link>
      </Button>
    </div>
  );
};

export default IndexPage;
