import { Section } from '../shared/Section';
import styles from './Video.module.scss';

type VideoProps = {};

const Video = ({}: VideoProps) => {
  return (
    <Section className={styles.container}>
      <video autoPlay muted controls poster="/assets/poster.jpg">
        <source src="/assets/main.webm" type="video/webm" />
        <source src="/assets/main.mp4" type="video/mp4" />
      </video>
    </Section>
  );
};

export { Video };
