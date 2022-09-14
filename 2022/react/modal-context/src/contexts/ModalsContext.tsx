import React, { createContext } from "react";
import { ModalProps } from "../ui/Modal";

export type ModalsState = {
  Component: React.ComponentType<ModalProps>;
  props: ModalProps;
};

type ModalsDispatch = {
  open: (Component: React.ComponentType<ModalProps>, props: ModalProps) => void;
  close: (
    Component: React.ComponentType<ModalProps>,
    props: ModalProps
  ) => void;
  allClose: () => void;
};

export const ModalsDispatchContext = createContext<ModalsDispatch>({
  open: () => {},
  close: () => {},
  allClose: () => {},
});
export const ModalsStateContext = createContext<ModalsState[]>([]);
