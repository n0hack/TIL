import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '../components/Button';

export default {
  title: 'button',
  component: Button,
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
  args: {
    label: '',
    primary: false,
  },
  decorators: [
    (Story) => (
      <div className="text-white">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
