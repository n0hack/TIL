import React, { useContext, useState } from "react";
import { useSetRecoilState } from "recoil";
import { ModalsDispatchContext } from "../contexts/ModalsContext";
import useModals from "../hooks/useModals";
import { testState } from "../recoil/atom";
import TestModal from "../ui/TestModal";

interface Props {}

const Sample = ({}: Props) => {
  const { openModal, Modal } = useModals();
  const setTestState = useSetRecoilState(testState);

  const [value, setValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onClick = () => {
    openModal(TestModal, {
      title: "이대로 전송?",
      buttons: true,
      onConfirm: () => {
        return new Promise<boolean | void>((resolve) => {
          console.log("로직을 처리합니당");
          console.log("결과는", value);
          setTestState(value);
          resolve(true);
        });
      },
    });
  };

  return (
    <div>
      <img
        src="/hakase.jpeg"
        alt="hakase"
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <br />
      <input value={value} onChange={onChange} />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default Sample;
