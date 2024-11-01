import styles from './page.module.css';

// Route Group(소괄호로 감싼 폴더명)을 사용하면, 특정 레이아웃을 원하는 그룹의 페이지에만 적용할 수 있다.
export default function Home() {
  return <div className={styles.page}>인덱스 페이지</div>;
}
