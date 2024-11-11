import React from 'react';
import { Header } from '../components';
import { ChakraProvider } from '@chakra-ui/react'

export default {
  component: Header,
  title: '12shop/complex/Header',
};

const Template = args => <ChakraProvider><Header {...args} /></ChakraProvider>;

export const Default = Template.bind({});

Default.args = {
  title: 'Showcase',
};
