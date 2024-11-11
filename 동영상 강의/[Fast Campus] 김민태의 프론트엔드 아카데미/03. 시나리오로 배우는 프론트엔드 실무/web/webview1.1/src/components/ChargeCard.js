import React from 'react';
import { CircleImage } from './CircleImage'
import { Center, Box, Flex, Text, VStack } from '@chakra-ui/react';

export const ChargeCard = ({ url, title }) => {

  return (
    <VStack w='100px'>
      <CircleImage
        url={url} 
        size={60}
      />
      <Text fontSize='xs'>{title}</Text>
    </VStack>
  )
}

