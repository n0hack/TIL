import { css, keyframes } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';

interface Props {
  open?: boolean;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  hideButtons?: boolean;
  cancellable?: boolean;
  cancelText?: string;
  confirmText?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}

const Dialog = ({
  open = false,
  title,
  description,
  hideButtons,
  cancellable,
  cancelText,
  confirmText,
  children,
  onCancel,
  onConfirm,
}: Props) => {
  const [visible, setVisible] = useState(open);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    if (open) {
      setVisible(true);
      setAnimate(true);
    } else {
      setAnimate(false);
      setTimeout(() => setVisible(false), 300);
    }
  }, [open]);

  console.log(`open: ${open}, visible: ${visible}, animate: ${animate}`);

  return (
    <div css={[visible ? { display: 'block' } : { display: 'none' }]}>
      <div css={[fullscreen, darkLayer, animate ? fadeIn : fadeOut]}></div>
      <div css={[fullscreen, whiteBoxWrapper, animate ? slideUp : slideOut]}>
        <div css={whiteBox}>
          {title && <h3>{title}</h3>}
          {description && <p>{description}</p>}
          {children}
          {!hideButtons && (
            <ButtonGroup css={{ marginTop: '3rem' }} rightAlign>
              {cancellable && (
                <Button theme="tertiary" onClick={onCancel}>
                  {cancelText}
                </Button>
              )}
              <Button onClick={onConfirm}>{confirmText}</Button>
            </ButtonGroup>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dialog;

const fullscreen = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const fadeInTransition = keyframes`
  0% {
  opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOutTransition = keyframes`
  0% {
    opacity: 1;
  }
  100% {
  opacity: 0;
  }
`;

const fadeIn = css`
  animation: ${fadeInTransition} 0.3s ease-in;
  animation-fill-mode: forwards;
`;

const fadeOut = css`
  animation: ${fadeOutTransition} 0.3s ease-in;
  animation-fill-mode: forwards;
`;

const slideUpTransition = keyframes`
  from {
    transform: translateY(200px) scale(0.8);
  }
  to {
    transform: translateY(0) scale(1);
  }
`;

const slideOutTransition = keyframes`
  from {
    transform: translateY(0) scale(1);
  }
  to {
    transform: translateY(200px) scale(0.8);
  }
`;

const slideUp = css`
  animation: ${slideUpTransition} 0.3s ease-in;
  animation-fill-mode: forwards;
`;

const slideOut = css`
  animation: ${slideOutTransition} 0.3s ease-in;
  animation-fill-mode: forwards;
`;

const darkLayer = css`
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
`;

const whiteBoxWrapper = css`
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const whiteBox = css`
  box-sizing: border-box;
  border-radius: 4px;
  width: 25rem;
  background: white;
  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);
  padding: 2rem;

  h3 {
    font-size: 1.5rem;
    color: #343a40;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    margin: 0;
    color: #868e96;
  }
`;
