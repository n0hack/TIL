import { HeaderButton } from './HeaderButton';

type AddPostHeaderRightProps = {
  onSubmit: () => void;
};

const AddPostHeaderRight = ({ onSubmit }: AddPostHeaderRightProps) => {
  return <HeaderButton labelText="등록" onPress={onSubmit} />;
};

export { AddPostHeaderRight };
