import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useModals from "./hooks/useModals";
import TestModal from "./ui/TestModal";
import Sample from "./components/Sample";
import { useRecoilValue } from "recoil";
import { testState } from "./recoil/atom";

function App() {
  const { openModal, Modal } = useModals();
  const testValue = useRecoilValue(testState);

  const handleClick = () => {
    openModal(Modal, {
      title: "테스트 1",
      content: <Sample />,
      onOpen: () => {
        openModal(TestModal, { title: "저장하시겠습니까?" });
      },
    });
  };

  return (
    <>
      <button onClick={handleClick}>모달 열기</button>
      {testValue === "" ? <h1>텍스트 없음</h1> : <h1>{testValue}</h1>}
    </>
  );
}

export default App;
