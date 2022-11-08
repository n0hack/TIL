import { createContext } from "react";
import useModal from "../hooks/useModal";

const ModalContext = createContext();
const { Provider } = ModalContext;

const ModalProvider = ({ children }) => {
  const { modal, modalContent, handleModal, openModal, closeModal } = useModal();
  return <Provider value={{ modal, modalContent, handleModal, openModal, closeModal }}>{children}</Provider>;
};

export { ModalContext, ModalProvider };
