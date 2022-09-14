import { useContext } from "react";
import { ModalsDispatchContext } from "../contexts/ModalsContext";
import { ModalProps } from "../ui/Modal";
import Modal from "../ui/Modal";

export default function useModals() {
  const { open, close } = useContext(ModalsDispatchContext);

  const openModal = (
    Component: React.ComponentType<ModalProps>,
    props: ModalProps
  ) => {
    open(Component, props);
  };

  const closeModal = (
    Component: React.ComponentType<ModalProps>,
    props: ModalProps
  ) => {
    close(Component, props);
  };

  return { openModal, closeModal, Modal };
}
