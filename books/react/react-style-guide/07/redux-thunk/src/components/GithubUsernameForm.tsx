import React, { useState } from "react";

type Props = {
  onSubmitUsername: (username: string) => void;
};

function GithubUsernameForm({ onSubmitUsername }: Props) {
  const [input, setInput] = useState("");
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitUsername(input);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  return (
    <form className="GithubUsernameForm" onSubmit={onSubmit}>
      <input
        type="text"
        onChange={onChange}
        placeholder="Github 계정명을 입력하세요."
        value={input}
      />
      <button type="submit">조회</button>
    </form>
  );
}

export default GithubUsernameForm;
