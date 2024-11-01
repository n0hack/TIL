import styles from './page.module.css';

// Route Group(소괄호로 감싼 폴더명)을 사용하면, 특정 레이아웃을 원하는 그룹의 페이지에만 적용할 수 있다.
// 앱 라우터는 컴포넌트가 기본적으로 서버 컴포넌트로 만들어지기 때문에, 번들에 포함되지 않아 TTI 속도가 빨라진다.
// ㄴ 페이지 라우터에서는 이를 구분하지 못해, 상호작용이 필요 없는 컴포넌트라 하더라도 번들에 포함되었다.
export default function Home() {
  return <div className={styles.page}>인덱스 페이지</div>;
}
