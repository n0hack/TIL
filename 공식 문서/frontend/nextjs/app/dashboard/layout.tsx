// Layout은 캐시되기 때문에, Request 객체에 접근 불가
// 대신 서버 컴포넌트 함수인 cookies와 headers를 통해 필요한 값 얻기 가능
// 같은 맥락에서 searchParams와 pathname도 읽을 수 없으므로, 하위에 클라이언트 컴포넌트 배치 후 읽기
export default function DashboardLayout({ children }: LayoutProps<"/dashboard">) {
  return <section>{children}</section>;
}
