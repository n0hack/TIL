import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import styles from './[id].module.css';
import fetchOneBook from '@/lib/fetch-one-book';
import { useRouter } from 'next/router';
import Head from 'next/head';

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
    // false: 생성되지 않은 페이지에 대해 NotFound 페이지 렌더링
    // blocking: SSR 방식처럼 사전 렌더링으로 즉시 생성되고, Next 서버에 정적 페이지로서 저장된다. (결합된 형태처럼 동작)
    // ㄴ 주의사항: 페이지 크기에 따라 페이지 전체 로딩 시간이 길어질 수 있는데, 이를 해결하기 위해 true 옵션을 사용할 수 있다.
    // true: 우선 props 없는 페이지부터 반환 후, props를 계산하여 따로 반환한다. (계산하는 부분만 로딩 인디케이터 돌리면 될 듯)
    fallback: true,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const { id } = context.params!;
  const book = await fetchOneBook(Number(id));

  // book 데이터가 없는 경우, NotFound 페이지로 리다이렉트된다.
  if (!book) {
    return {
      notFound: true,
    };
  }

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
  const router = useRouter();

  // !book으로만 조건을 걸었을 때, 에러가 발생해서 book이 없는 경우가 있을 수 있다.
  // 따라서 폴백 처리 중인 여부만 따로 확인해서, 로딩 인디케이터를 띄워줄 수 있다.
  if (router.isFallback) {
    // 폴백 상태일지라도 기본적인 메타 태그가 보이도록 설정
    return (
      <>
        <Head>
          <title>한입북스</title>
          <meta property="og:image" content="/thumbnail.png" />
          <meta property="og:title" content="한입북스" />
          <meta property="og:description" content="한입 북스에 등록된 도서들을 만나보세요" />
        </Head>
        <div>로딩 중입니다.</div>
      </>
    );
  }

  if (!book) return '문제가 발생했습니다. 다시 시도하세요.';

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={coverImgUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
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
    </>
  );
}
