import { ComponentMeta, ComponentStory } from '@storybook/react';
import Dialog from './Dialog';

export default {
  title: 'components/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '결제 성공',
  open: false,
  description: '결제가 성공적으로 이루어졌습니다.',
  confirmText: '확인',
  cancelText: '취소',
  cancellable: false,
};

export const cancellable = () => {
  return (
    <Dialog
      title="포스트 삭제"
      description="포스트를 정말로 삭제하시겠습니까?"
      open={true}
      confirmText="삭제"
      cancelText="취소"
      cancellable
    />
  );
};

export const customContent = () => {
  return (
    <Dialog open={true} hideButtons>
      Custom Content
    </Dialog>
  );
};
