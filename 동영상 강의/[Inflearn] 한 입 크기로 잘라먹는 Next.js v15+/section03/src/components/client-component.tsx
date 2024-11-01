'use client';

type Props = {
  children: React.ReactNode;
};

const ClientComponent = ({ children }: Props) => {
  console.log('클라이언트 컴포넌트!');

  // 클라이언트 컴포넌트 안에 서버 컴포넌트가 포함되면, Next는 자동으로 클라이언트 컴포넌트로 동작하도록 변환한다.
  // 오류를 방지하기 위함이지만, 되도록이면 번들에 포함되지 않도록 서버 컴포넌트를 포함하지 않도록 하자.
  // ㄴ children 형태로 받아서 렌더링하는 형태로 사용할 수 있다.
  return <div>{children}</div>;
};

export { ClientComponent };
