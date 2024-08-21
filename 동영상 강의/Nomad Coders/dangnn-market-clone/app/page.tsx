import Link from 'next/link';
import logoImg from '@/public/logo.png';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <div className="my-auto flex flex-col items-center gap-2">
        <Image className="w-64" src={logoImg} alt="당근이" width={0} height={0} />
        <h1 className="text-2xl font-bold">당신 근처의 당근</h1>
        <h2 className="text-neutral-800 text-center">
          동네라서 가능한 모든 것<br />
          지금 내 동네를 선택하고 시작해보세요!
        </h2>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <Link className="primary-btn py-2.5 text-lg" href="/create-account">
          시작하기
        </Link>
        <div className="flex gap-2">
          <span className="text-neutral-800">이미 계정이 있나요?</span>
          <Link className="hover:underline" href="/login">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
