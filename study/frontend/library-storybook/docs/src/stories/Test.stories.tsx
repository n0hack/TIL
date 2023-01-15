import { ComponentMeta, ComponentStory } from '@storybook/react';
import Test from './Test';

export default {
  title: '',
  component: Test,
} as ComponentMeta<typeof Test>;

const Template: ComponentStory<typeof Test> = (args) => <Test {...args} />;

export const Default = Template.bind({});
Default.args = {};
