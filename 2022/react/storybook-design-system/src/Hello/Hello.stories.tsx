import { ComponentMeta, ComponentStory } from '@storybook/react';
import Hello from './Hello';

export default {
  title: 'components/basic/Hello',
  component: Hello,
  argTypes: {
    name: {
      description: '보여주고 싶은 이름',
    },
    big: {
      defaultValue: false,
      description: "이 값을 'true'로 설정하면 h1 태그로 렌더링됩니다.",
    },
    onHello: {
      description: 'Hello 버튼 클릭 시 실행할 함수',
    },
    onBye: {
      description: 'Bye 버튼 클릭 시 실행할 함수',
    },
  },
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    docs: {
      description: {
        component: '안녕하세요. 라고 보여주는 컴포넌트',
      },
    },
  },
} as ComponentMeta<typeof Hello>;

const Template: ComponentStory<typeof Hello> = (args) => <Hello {...args} />;

export const standard = Template.bind({});
standard.args = {
  name: 'Storybook',
};
standard.parameters = {
  docs: {
    description: {
      component: '안녕하세요. 라고 보여주는 컴포넌트',
    },
  },
};

// big = () => <Hello big />
export const big = Template.bind({});
big.args = {
  name: 'Storybook',
  big: true,
};
