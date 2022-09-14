import React, { useContext, useMemo, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ModalProps } from "../ui/Modal";
import { ModalsDispatchContext, ModalsStateContext } from "./ModalsContext";

interface Props {
  children?: React.ReactNode;
}

export default function ModalsProvider({ children }: Props) {
  const count = useRef(0);
  const [openedModals, setOpenedModals] = useState<
    {
      Component: React.ComponentType<ModalProps>;
      props: ModalProps;
    }[]
  >([]);

  const open = (
    Component: React.ComponentType<ModalProps>,
    props: ModalProps
  ) => {
    setOpenedModals((modals) => {
      console.log([...modals, { Component, props }]);
      return [...modals, { Component, props }];
    });
  };

  const close = (
    Component: React.ComponentType<ModalProps>,
    props: ModalProps
  ) => {
    setOpenedModals((modals) => {
      return modals.filter((modal) => modal.Component !== Component);
    });
  };

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalsStateContext.Provider value={openedModals}>
      <ModalsDispatchContext.Provider value={dispatch}>
        {children}
        <ModalContainer />
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
}

function ModalContainer({
  className,
  modalContainerParent,
}: {
  className?: string;
  modalContainerParent?: Element;
}) {
  const modals = useContext(ModalsStateContext);
  const { close } = useContext(ModalsDispatchContext);

  if (modals.length <= 0) {
    console.log("Null Portal:", modals);
    return null;
  }

  return ReactDOM.createPortal(
    <div className={className}>
      {modals.map((modal, key) => {
        const { onConfirm, ...rest } = modal.props;

        const onClose = () => {
          close(modal.Component, modal.props);
        };

        const handleSubmit = async () => {
          if (typeof onConfirm === "function") {
            const response = await onConfirm();
            console.log(response);
          }
          onClose();
        };

        return (
          <modal.Component
            key={key}
            onClose={onClose}
            onConfirm={handleSubmit}
            {...rest}
          />
        );
      })}
    </div>,
    modalContainerParent ?? document.body
  );
}
