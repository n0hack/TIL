import Button from "@components/Button";
import Input from "@components/Input";
import Layout from "@components/Layout";
import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const LoginPage = ({}: Props) => {
  return (
    <Layout>
      <Input />
      <Input />
      <Button>
        <Link to="/">로그인</Link>
      </Button>
    </Layout>
  );
};

export default LoginPage;
