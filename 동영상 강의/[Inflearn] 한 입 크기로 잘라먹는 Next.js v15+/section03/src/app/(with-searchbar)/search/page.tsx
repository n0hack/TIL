import { ClientComponent } from '@/components/client-component';

// 기본적으로 SSG로 생성되나, query나 param을 사용하는 등의 정적 페이지로 만들기 애매한 페이지는 동적인 페이지로 생성된다.
// SSG는 프리페칭 시 RSC Payload와 번들 모두 불러오지만, Dynamic Page의 경우 RSC Payload만 먼저 불러온다. 번들은 실제 이동 후 불러온다.
const SearchPage = async ({ searchParams }: { searchParams: Promise<{ q: string }> }) => {
  const { q } = await searchParams;

  return (
    <div>
      SearchPage - {q}
      {/* 클라이언트 컴포넌트를 포함하면, 네트워크 탭에서 확인 시 rsc 외에 [페이지명].js라는 번들 결과도 확인 가능하다. */}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
};

export default SearchPage;
