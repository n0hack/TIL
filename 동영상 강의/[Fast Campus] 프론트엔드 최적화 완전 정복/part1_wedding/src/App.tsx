import styles from './App.module.scss';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { FullScreenMessage } from './components/shared/FullScreenMessage';

function App() {
  const [wedding, setWedding] = useState(null);
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

  if (!loading) {
    return <FullScreenMessage type="loading" />;
  }

  if (error) {
    return <FullScreenMessage type="error" />;
  }

  return (
    <div className={clsx(styles.container)}>{JSON.stringify(wedding)}</div>
  );
}

export default App;
