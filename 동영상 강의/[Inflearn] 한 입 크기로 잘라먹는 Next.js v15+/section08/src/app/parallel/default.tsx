// default 페이지를 만드는 이유는 슬롯 페이지 경로로 이동한 후 새로고침했을 때 발생하는 문제를 해결하기 위함이다.
// parallel/setting 이동 시, @feed 슬롯에만 setting 페이지가 있다면, 나머지는 새로고침 시 렌더링 정보가 없기에 404 페이지가 뜬다.
// 그렇기 때문에 해당 라우트의 페이지가 없는 경우, default 페이지를 대신 보여줄 수 있다.
const Page = () => {
  return <div>/parallel/default</div>;
};

export default Page;
