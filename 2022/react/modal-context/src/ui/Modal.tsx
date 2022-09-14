import { useEffect, useRef } from "react";
import styled from "styled-components";

export type ModalProps = {
  title: string;
  content?: React.ReactNode;
  buttons?: boolean;
  onClose?: () => void;
  onConfirm?: () => Promise<boolean | void>;
  onOpen?: () => void;
};

const Modal = ({
  title,
  content,
  onClose,
  onConfirm,
  onOpen,
  buttons,
}: ModalProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  const handleClickConfirm = () => {
    onConfirm!();
  };

  const handleClickCancel = () => {
    onClose!();
  };

  useEffect(() => {
    if (ref.current && !ref.current.open) {
      ref.current.showModal();
    }
  }, []);

  return (
    <Dialog ref={ref}>
      <h2>{title}</h2>
      {content && <div>{content}</div>}
      {buttons && (
        <div>
          <button onClick={handleClickCancel}>아뇽</button>
          <button onClick={handleClickConfirm}>확인</button>
        </div>
      )}
      {/* <div>
        <button onClick={handleClickCancel}>취소</button>
        <button onClick={handleClickConfirm}>확인</button>
        <button onClick={onOpen}>모달 추가</button>
      </div> */}
    </Dialog>
  );
};

export default Modal;

const Dialog = styled.dialog`
  border: 0;

  h2 {
    margin: 0;
    margin-bottom: 1rem;
  }

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
