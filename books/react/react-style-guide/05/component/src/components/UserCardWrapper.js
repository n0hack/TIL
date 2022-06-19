import React from "react";
import UserCard from "./UserCard";

export default function UserCardWrapper() {
  return (
    <UserCard name="Taro" onClickFunction={() => console.log("User Card")} />
  );
}
