import BookPage from '@/app/book/[id]/page';
import { Modal } from '@/components/modal';

// 클라이언트 사이드 렌더링 방식으로 이동한 뒤에만 인터셉팅이 가능함
// (.)은 같은 경로의 같은 라우트 가로채기
// (..)은 상위 경로의 같은 라우트 가로채기
// (...)은 app 바로 아래의 같은 라우트 가로채기
const Page = (props: any) => {
  return (
    <div>
      <Modal>
        <BookPage {...props} />
      </Modal>
    </div>
  );
};

export default Page;
