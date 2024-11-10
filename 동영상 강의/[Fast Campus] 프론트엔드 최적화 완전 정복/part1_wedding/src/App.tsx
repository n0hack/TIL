import styles from './App.module.scss';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { FullScreenMessage } from './components/shared/FullScreenMessage';
import { Heading } from './components/sections/Heading';
import { Video } from './components/sections/Video';
import { Wedding } from './models/wedding';
import { ImageGallery } from './components/sections/ImageGallery';
import { Intro } from './components/sections/Intro';
import { Invitation } from './components/sections/Invitation';
import { Calendar } from './components/sections/Calendar';
import { Map } from './components/sections/Map';
import { Contact } from './components/sections/Contact';
import { Share } from './components/sections/Share';
import { Modal } from './components/shared/Modal';
import { AttendCountModal } from './components/AttendCountModal';

function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // 1. wedding 데이터 호출
  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:8888/wedding')
      .then((response) => {
        if (!response.ok) {
          throw new Error('청첩장 정보를 불러오지 못했습니다.');
        }
        return response.json();
      })
      .then((data) => {
        setWedding(data);
      })
      .catch((e) => {
        console.log('에러 발생', e);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <FullScreenMessage type="loading" />;
  }

  if (error) {
    return <FullScreenMessage type="error" />;
  }

  if (wedding === null) {
    return null;
  }

  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { intro, invitation },
    attendCount,
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
