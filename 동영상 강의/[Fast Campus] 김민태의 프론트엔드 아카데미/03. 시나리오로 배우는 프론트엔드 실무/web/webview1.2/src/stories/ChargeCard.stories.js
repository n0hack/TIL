import React from 'react';
import { ChargeCard } from '../components';
import { ChakraProvider } from '@chakra-ui/react'

export default {
  component: ChargeCard,
  title: '12shop/complex/ChargeCard',
};

const Template = args => <ChakraProvider><ChargeCard {...args} /></ChakraProvider>;

export const Default = Template.bind({});

Default.args = {
  title: '아이폰14 pro',
  url: 'http://localhost:6060/01/medium/1eba1856-c145-4cff-b480-82f274dcafe1.jpg'
};
