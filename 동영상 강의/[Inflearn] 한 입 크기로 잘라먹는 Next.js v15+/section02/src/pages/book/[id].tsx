import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import styles from './[id].module.css';
import fetchOneBook from '@/lib/fetch-one-book';

export const getStaticPaths = (async () => {
  return {
    // URL Param의 값은 프레임워크에서 잘 읽을 수 있도록 문자열로 설정하기
    paths: [
      {
        params: { id: '1' },
      },
      {
        params: { id: '2' },
      },
      {
        params: { id: '3' },
      },
    ],
    // false일 시 NotFound 페이지 렌더링
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const { id } = context.params!;
  const book = await fetchOneBook(Number(id));

  return {
    props: {
      book,
    },
  };
}) satisfies GetStaticProps;

// export const getServerSideProps = (async (context) => {
//   const { id } = context.params!;
//   const book = await fetchOneBook(Number(id));

//   return {
//     props: {
//       book,
//     },
//   };
// }) satisfies GetServerSideProps;

export default function Page({ book }: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!book) return '문제가 발생했습니다. 다시 시도하세요.';

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <div className={styles.container}>
      <div className={styles.cover_img_container} style={{ backgroundImage: `url('${coverImgUrl}')` }}>
        <img src={coverImgUrl} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.subTitle}>{subTitle}</div>
      <div className={styles.author}>
        {author} | {publisher}
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
