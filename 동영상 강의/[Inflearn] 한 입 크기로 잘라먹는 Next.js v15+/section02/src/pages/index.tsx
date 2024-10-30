// _app.tsx를 제외하고는 각 페이지 및 컴포넌트에서의 이름 충돌 문제로 글로벌 CSS를 불러올 수 없다.
// 이를 해결하기 위해서는 컴포넌트나 페이지에 따라 독립적인 클래스명을 생성하는 CSS Module을 이용할 수 있다.
import styles from './index.module.css';

// 개발 모드로 켰을 때는, 프리페칭이 동작하지 않는다.
export default function Home() {
  return (
    <>
      <h1 className={`${styles.h1}`}>인덱스</h1>
      <h2 className={`${styles.h2}`}>H2</h2>
    </>
  );
}
