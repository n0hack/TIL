import React from 'react';
import { RoundedBox } from '../components';
import { ChakraProvider } from '@chakra-ui/react'

export default {
  component: RoundedBox,
  title: '12shop/core/RoundedBox',
};

const Template = args => <ChakraProvider><RoundedBox {...args} /></ChakraProvider>;

export const Default = Template.bind({});

Default.args = {
  size: 120,
  roundSize: 10,
  url: '/images/iphone-1842202_1280.jpg'
};
