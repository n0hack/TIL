import React from 'react';
import { Dimmed } from './Dimmed';
import styles from './Modal.module.scss';

type ModalProps = {
  open: boolean;
  title?: string;
  body: React.ReactNode;
  rightButtonLabel?: string;
  onRightButtonClick: () => void;
  leftButtonLabel?: string;
  onLeftButtonClick: () => void;
};

const Modal = ({
  open,
  body,
  title,
  leftButtonLabel = '닫기',
  rightButtonLabel = '확인',
  onLeftButtonClick,
  onRightButtonClick,
}: ModalProps) => {
  if (!open) {
    return null;
  }

  return (
    <Dimmed>
      <div className={styles.wrap_modal}>
        <div className={styles.wrap_body}>
          <div className={styles.wrap_content}>
            {title && <div className={styles.txt_title}>{title}</div>}
            {body}
          </div>
          <div className={styles.wrap_buttons}>
            <button onClick={onLeftButtonClick}>{leftButtonLabel}</button>
            <button onClick={onRightButtonClick}>{rightButtonLabel}</button>
          </div>
        </div>
      </div>
    </Dimmed>
  );
};

export { Modal };
