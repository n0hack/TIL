import { format, parseISO } from 'date-fns';
import { Section } from '../shared/Section';
import styles from './Intro.module.scss';
import { ko } from 'date-fns/locale';
import { Text } from '../shared/Text';

type IntroProps = {
  groomName: string;
  brideName: string;
  locationName: string;
  date: string;
  message: string;
};

const Intro = ({
  brideName,
  groomName,
  locationName,
  date,
  message,
}: IntroProps) => {
  return (
    <Section className={styles.container}>
      <div className={styles.wrap_persons}>
        <span>{groomName}</span>
        <IconHeart className={styles.ico_heart} />
        <span>{brideName}</span>
      </div>

      <div className={styles.wrap_location}>
        <span>
          {format(parseISO(date), 'yyyy년 M월 d일 eeee', { locale: ko })}
        </span>
        <span>{locationName}</span>
      </div>

      <IconFlower className={styles.ico_flower} />

      {/* \n이나 HTML 기호 등을 올바르게 출력하고자 할 때 고려할 수 있지만, 보안 이슈로 많이 사용되진 않음 */}
      {/* <div dangerouslySetInnerHTML={{ __html: message }} /> */}
      <Text>{message}</Text>
    </Section>
  );
};

const IconHeart = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
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

const IconFlower = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      enableBackground="new 0 0 64 64"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 64 64"
    >
      <path
        d="M29.1,8c-0.8-0.3-1.7-0.6-2.8-0.6c-4.3,0-6.7,3.4-6.7,7.4c0,7.4,12.5,13.7,12.5,13.7s12.5-6.4,12.5-13.7  c0-3.9-2.4-7.4-6.7-7.4l0,0c-4.3,0-5.8,3.4-5.8,3.4C30.6,9,29.1,8,29.1,8z"
        fill="#E64C3C"
      />
      <path
        d="  M29.1,8c-0.8-0.3-1.7-0.6-2.8-0.6c-4.3,0-6.7,3.4-6.7,7.4c0,7.4,12.5,13.7,12.5,13.7s12.5-6.4,12.5-13.7c0-3.9-2.4-7.4-6.7-7.4l0,0  c-4.3,0-5.8,3.4-5.8,3.4"
        fill="none"
        stroke="#2C3E50"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M43.3,41.8 M43.4,40H21.2c-1,0-2.2,1.1-2.2,2.1v4.4c0,1,1.2,1.5,2.2,1.5h1.2l1.8,9.9c0.2,1,1.1,2.1,2.1,2.1  h12c1,0,1.9-1.1,2.1-2.1l1.8-9.9h1.2c1,0,1.6-0.5,1.6-1.5v-4.4C45,41.1,44.3,40,43.4,40L43.4,40z"
        fill="#8C623B"
      />
      <path
        d="  M43.3,41.8 M43.4,40H21.2c-1,0-2.2,1.1-2.2,2.1v4.4c0,1,1.2,1.5,2.2,1.5h1.2l1.8,9.9c0.2,1,1.1,2.1,2.1,2.1h12c1,0,1.9-1.1,2.1-2.1  l1.8-9.9h1.2c1,0,1.6-0.5,1.6-1.5v-4.4C45,41.1,44.3,40,43.4,40L43.4,40z"
        fill="none"
        stroke="#2C3E50"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        fill="none"
        stroke="#2C3E50"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        x1="39"
        x2="25"
        y1="47"
        y2="47"
      />
      <line
        fill="none"
        stroke="#2C3E50"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        x1="32.3"
        x2="32.3"
        y1="32.2"
        y2="39.3"
      />
      <path
        d="  M27.9,31.5c0,0,2.2,0.8,4.4,0.8s4.4-0.6,4.4-0.6"
        fill="none"
        stroke="#2C3E50"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M52.8,26.3c-2.3,1.7-7.7,1.2-10.7,3.7c-1.4,1.1-2.1,2.6-2.2,5.5c0,0.5-0.1,0.7,0.4,0.7  c4,0.1,6.4-0.2,8.2-1.3C51.2,33.2,52.3,29,52.8,26.3z"
        fill="#7ABE90"
      />
      <path
        d="M11.2,26.3c2.3,1.7,7.7,1.2,10.7,3.7c1.4,1.1,2.1,2.6,2.2,5.5c0,0.5,0.1,0.7-0.4,0.7c-4,0.1-6.4-0.2-8.2-1.3  C12.8,33.2,11.7,29,11.2,26.3z"
        fill="#7ABE90"
      />
      <path
        d="  M52.8,26.3c-2.3,1.7-7.7,1.2-10.7,3.7c-1.4,1.1-2.1,2.6-2.2,5.5c0,0.5-0.1,0.7,0.4,0.7c4,0.1,6.4-0.2,8.2-1.3  C51.2,33.2,52.3,29,52.8,26.3z"
        fill="none"
        stroke="#2C3E50"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="  M11.2,26.3c2.3,1.7,7.7,1.2,10.7,3.7c1.4,1.1,2.1,2.6,2.2,5.5c0,0.5,0.1,0.7-0.4,0.7c-4,0.1-6.4-0.2-8.2-1.3  C12.8,33.2,11.7,29,11.2,26.3z"
        fill="none"
        stroke="#2C3E50"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};

export { Intro };
