import { ComponentProps, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { Modal } from '../components/shared/Modal';

// 컴포넌트 Props 추출
type ModalProps = ComponentProps<typeof Modal>;
type ModalOptions = Omit<ModalProps, 'open'>;

type ModalContextValue = {
  open: (options: ModalOptions) => void;
  close: () => void;
};

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

const defaultValues = {
  open: false,
  body: null,
  onRightButtonClick: () => {},
  onLeftButtonClick: () => {},
};

export const ModalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [modalState, setModalState] = useState<ModalProps>(defaultValues);

  const $portal_root = document.getElementById('root-portal');

  const open = (options: ModalOptions) => {
    setModalState({ ...options, open: true });
  };

  const close = () => {
    setModalState({ ...defaultValues });
  };

  const values = {
    open,
    close,
  };

  return (
    <ModalContext.Provider value={values}>
      {children}
      {$portal_root !== null
        ? createPortal(<Modal {...modalState} />, $portal_root)
        : null}
    </ModalContext.Provider>
  );
};

export function useModalContext() {
  const values = useContext(ModalContext);

  if (!values) {
    throw new Error('ModalContext 안에서 사용해주세요.');
  }

  return values;
}
