import { FormButton } from '@/components/form-button';
import { FormInput } from '@/components/form-input';
import { SocialLogin } from '@/components/social-login';

const LoginPage = () => {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">이메일과 비밀번호를 입력하여 로그인해주세요.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput type="email" placeholder="이메일" required errors={[]} />
        <FormInput type="password" placeholder="비밀번호" required errors={[]} />
        <FormButton loading={false} text="로그인하기" />
      </form>
      <SocialLogin />
    </div>
  );
};

export default LoginPage;
