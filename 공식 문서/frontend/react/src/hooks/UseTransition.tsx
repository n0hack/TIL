// 함수의 우선순위를 낮출 수 있음
import React, { ElementRef, ReactElement, Suspense, useState, useTransition } from 'react';
import styles from './transition.module.css';

const UseTransition = () => {
  const [text, setText] = useState('0');
  const [isPending, startTransition] = useTransition();

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            startTransition(() => {
              setText(e.target.value);
            });
          }}
        />
        100,000 multiples of number: {text}
      </div>
      <div className={styles.listWrapper}>
        <div style={{ paddingTop: '60px', background: 'white' }}>
          {isPending ? <div>Loading...</div> : <List text={text} />}
        </div>
      </div>
    </div>
  );
};

const List = ({ text }: { text: string }) => {
  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {Array.from({ length: 20000 }, (_, i) => i).map((i) => (
        <Item key={i} text={(i + 1) * +text} />
      ))}
    </ul>
  );
};

const Item = ({ text }) => {
  return <li>{text}</li>;
};

export default UseTransition;
