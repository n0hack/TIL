import { FormButton } from '@/components/form-button';
import { FormInput } from '@/components/form-input';

const SMSPage = () => {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">휴대폰 번호로 로그인해주세요.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput type="number" placeholder="휴대폰 번호" required errors={[]} />
        <FormInput type="number" placeholder="인증번호 입력" required errors={[]} />
        <FormButton loading={false} text="인증문자 받기" />
      </form>
    </div>
  );
};

export default SMSPage;
