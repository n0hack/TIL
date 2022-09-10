import React, { useEffect, useRef } from "react";
import styles from "./Modal.module.scss";

interface Props {
  setModalOpen: (isOpen: boolean) => void;
  id?: number;
  title?: string;
  content?: string;
  writer?: string;
}

const Modal = (props: Props) => {
  const closeModal = () => {
    props.setModalOpen(false);
  };

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        props.setModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div ref={modalRef} className={styles.modal}>
      <button className={styles.close} onClick={closeModal}>
        X
      </button>
      <p>모달창입니다.</p>
    </div>
  );
};

export default Modal;
