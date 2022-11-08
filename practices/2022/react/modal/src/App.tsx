import React, { useRef, useState } from "react";
import Modal from "./components/Modal";
import useModal from "./hooks/useModal";

interface Props {}

const App = ({}: Props) => {
  const [modalOpen, setModalOpen] = useModal();

  return (
    <div>
      <button onClick={() => setModalOpen(false)}>모달 띄우기</button>
      {/* {modalOpen && <Modal setModalOpen={setModalOpen} />} */}
    </div>
  );
};

export default App;
