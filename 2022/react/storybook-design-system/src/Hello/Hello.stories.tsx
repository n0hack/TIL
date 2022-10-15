import { ComponentMeta, ComponentStory } from '@storybook/react';
import Hello from './Hello';

export default {
  title: 'components/basic/Hello',
  component: Hello,
} as ComponentMeta<typeof Hello>;

const Template: ComponentStory<typeof Hello> = (args) => <Hello {...args} />;

export const standard = Template.bind({});
standard.args = {
  name: 'Storybook',
};

// big = () => <Hello big />
export const big = Template.bind({});
big.args = {
  name: 'Storybook',
  big: true,
};
