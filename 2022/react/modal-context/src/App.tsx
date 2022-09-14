import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useModals from "./hooks/useModals";
import TestModal from "./ui/TestModal";
import Sample from "./components/Sample";

function App() {
  const { openModal, Modal } = useModals();

  const handleClick = () => {
    openModal(Modal, {
      title: "테스트 1",
      content: <Sample />,
      onConfirm: () => console.log("로직 처리"),
      onOpen: () => {
        openModal(TestModal, { title: "저장하시겠습니까?" });
      },
    });
  };

  return (
    <>
      <button onClick={handleClick}>모달 열기</button>
    </>
  );
}

export default App;
