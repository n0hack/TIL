import styles from './FullScreenMessage.module.scss';
import { clsx } from 'clsx';

type FullScreenMessageProps = {
  type: 'loading' | 'error';
};

const FullScreenMessage = ({ type }: FullScreenMessageProps) => {
  return (
    <div className={clsx(styles.container)}>
      {type === 'loading' && <Heart />}
      {type === 'error' && (
        <>
          <Error />
          에러가 발생했어요. 잠시 후 다시 시도해주세요.
        </>
      )}
    </div>
  );
};

const Heart = () => {
  return (
    <svg
      className={styles.ico_heart}
      version="1.1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="_x31_66_x2C__Heart_x2C__Love_x2C__Like_x2C__Twitter">
        <g>
          <path d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z" />
        </g>
      </g>
      <g id="Layer_1" />
    </svg>
  );
};

const Error = () => {
  return (
    <svg
      className={styles.ico_error}
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
      <path d="M4 16v2a2 2 0 0 0 2 2h2" />
      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
      <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
      <path d="M9.5 15.05a3.5 3.5 0 0 1 5 0" />
    </svg>
  );
};

export { FullScreenMessage };
