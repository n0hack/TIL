import { useEffect, useState } from 'react';

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [hours, minutes, seconds];
};

// export { useCountdown };
const CD = ({ assert, unit }) => !!assert ? <>{`${assert}${unit}`}</> : null;

export const Countdown = ({ openDate }) => {
  const [hours, minutes, seconds] = useCountdown(openDate);

  return (
    <div>
      <CD assert={hours} unit='시간'/>
      <CD assert={minutes} unit='분'/>
      <CD assert={seconds} unit='초전...'/>
    </div>
  )
}