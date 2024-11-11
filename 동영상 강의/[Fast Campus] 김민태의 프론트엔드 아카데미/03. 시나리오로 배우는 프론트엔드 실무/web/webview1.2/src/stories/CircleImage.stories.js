import React from 'react';
import { CircleImage } from '../components';
import { ChakraProvider } from '@chakra-ui/react'

export default {
  component: CircleImage,
  title: '12shop/core/CircleImage',
};

const Template = args => <ChakraProvider><CircleImage {...args} /></ChakraProvider>;

export const Default = Template.bind({});

Default.args = {
  size: 60,
  url: '/images/woman-g93e257291_1280.jpg'
};
