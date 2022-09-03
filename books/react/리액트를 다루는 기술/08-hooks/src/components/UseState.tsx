import React, { useState } from "react";

type Props = {};

const UseState = ({}: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = firstName + " " + lastName; // 두 개의 상태로 충분히 표현 가능

  const handleChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value);
  const handleChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value);

  return (
    <>
      <h2>Let's check you in</h2>
      <label>
        First name: <input type="text" value={firstName} onChange={handleChangeFirstName} />
      </label>
      <label>
        Last name: <input type="text" value={lastName} onChange={handleChangeLastName} />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
};

export default UseState;
