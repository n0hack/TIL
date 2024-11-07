'use client';

import { PropsWithChildren, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.css';
import { useRouter } from 'next/navigation';

type ModalProps = {};

const Modal = ({ children }: PropsWithChildren<ModalProps>) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({
        top: 0,
      });
    }
  }, []);

  return createPortal(
    <dialog
      ref={dialogRef}
      className={styles.modal}
      onClick={(e) => {
        // 모달 배경 클릭 시, 뒤로가기
        if ((e.target as any).nodeName === 'DIALOG') {
          router.back();
        }
      }}
      onClose={(e) => {
        router.back();
      }}
    >
      {children}
    </dialog>,
    document.getElementById('modal-root') as HTMLElement,
  );
};

export { Modal };
