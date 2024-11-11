import React from 'react';
import { Image } from '@chakra-ui/react'

export const CircleImage = ({ url, size }) => {

  return (
    <Image 
      src={url} 
      boxSize={`${size}px`}
      borderRadius='full' 
      objectFit='cover' 
    />
  )
}

