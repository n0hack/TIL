import styles from './App.module.scss';
import clsx from 'clsx';
import { Heading } from './components/sections/Heading';
import { Video } from './components/sections/Video';
import { ImageGallery } from './components/sections/ImageGallery';
import { Intro } from './components/sections/Intro';
import { Invitation } from './components/sections/Invitation';
import Calendar from './components/sections/Calendar';
import { Map } from './components/sections/Map';
import { Contact } from './components/sections/Contact';
import { Share } from './components/sections/Share';
import { AttendCountModal } from './components/AttendCountModal';
import { useWedding } from './hooks/useWedding';
import { FullScreenMessage } from './components/shared/FullScreenMessage';

function App() {
  // API 호출부를 분리했기에, 테스트가 필요하다면 useWedding에 대한 모킹만 작업하면 된다.
  const { wedding, loading, error } = useWedding();

  if (error) {
    return <FullScreenMessage type="error" />;
  }

  if (!wedding) {
    return null;
  }

  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { intro, invitation },
  } = wedding;

  return (
    <div className={clsx(styles.container)}>
      <Heading date={date} />
      <Video />
      <Intro
        groomName={groom.name}
        brideName={bride.name}
        locationName={location.name}
        date={date}
        message={intro}
      />
      <Invitation message={invitation} />
      <ImageGallery images={galleryImages} />
      <Calendar date={date} />
      <Map location={location} />
      <Contact groom={groom} bride={bride} />
      <Share brideName={bride.name} date={date} groomName={groom.name} />
      <AttendCountModal wedding={wedding} />
    </div>
  );
}

export default App;
