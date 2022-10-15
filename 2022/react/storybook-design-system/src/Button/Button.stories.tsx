import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';
import { css } from '@emotion/react';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    children: { description: '버튼 안의 내용' },
    theme: { description: '버튼의 생김새를 설정합니다.' },
    size: { description: '버튼의 크기를 설정합니다.' },
    width: { description: '버튼의 너비를 임의로 설정합니다.' },
    disabled: { description: '버튼을 비활성화 시킵니다.' },
    onClick: { description: '클릭했을 때 호출할 함수' },
  },
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <React.Fragment>BUTTON</React.Fragment>,
};

export const Primary = Template.bind({});
Primary.args = {
  children: <React.Fragment>PRIMARY</React.Fragment>,
  theme: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: <React.Fragment>PRIMARY</React.Fragment>,
  theme: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: <React.Fragment>PRIMARY</React.Fragment>,
  theme: 'tertiary',
};

const buttonWrapper = css`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const sizes = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <div className="description">Small</div>
        <Button size="small">BUTTON</Button>
      </div>
      <div>
        <div className="description">Medium</div>
        <Button size="medium">BUTTON</Button>
      </div>
      <div>
        <div className="description">Big</div>
        <Button size="big">BUTTON</Button>
      </div>
    </div>
  );
};

export const disabled = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button disabled>PRIMARY</Button>
      </div>
      <div>
        <Button disabled theme="secondary">
          SECONDARY
        </Button>
      </div>
      <div>
        <Button disabled theme="tertiary">
          TERTIARY
        </Button>
      </div>
    </div>
  );
};

export const customSized = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button width="20rem">CUSTOM WIDTH</Button>
      </div>
      <div>
        <Button width="100%">FULL WIDTH</Button>
      </div>
    </div>
  );
};
