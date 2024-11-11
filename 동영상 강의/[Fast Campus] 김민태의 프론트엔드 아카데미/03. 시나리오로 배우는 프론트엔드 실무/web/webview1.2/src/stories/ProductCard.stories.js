import React from 'react';
import { ProductCard } from '../components';
import { ChakraProvider } from '@chakra-ui/react'

export default {
  component: ProductCard,
  title: '12shop/complex/ProductCard',
};

const Template = args => <ChakraProvider><ProductCard {...args} /></ChakraProvider>;

export const Default = Template.bind({});

Default.args = {
  title: '아이폰14 pro',
  url: '/images/iphone-1842202_1280.jpg'
};
