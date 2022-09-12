import React from "react";
import { Post } from "../types/post";

interface Props {
  loadingPost: boolean;
  post: Post | null;
}

const Sample = ({ loadingPost, post }: Props) => {
  return (
    <div>
      <section>
        <h1>포스트</h1>
        {loadingPost && "로딩 중..."}
        {!loadingPost && post && (
          <div>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
          </div>
        )}
      </section>
      <hr />
    </div>
  );
};

export default Sample;
