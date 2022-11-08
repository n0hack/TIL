import React, { useState } from "react";

export default function useModal() {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState<string | boolean>("I'm the Modal Content");

  const handleModal = (content = false) => {
    setModal(false);
    if (content) {
      setModalContent(content);
    }
  };

  const closeModal = (content = false) => {
    setModal(false);
    if (content) {
      setModalContent(content);
    }
  };

  const openModal = (content = false) => {
    setModal(true);
    if (content) {
      setModalContent(content);
    }
  };

  return { modal, handleModal, openModal, closeModal, modalContent };
}
