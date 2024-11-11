import React from 'react';
import { Image } from '@chakra-ui/react'

export const RoundedBox = ({ url, size, roundSize = 10 }) => {

  return (
    <Image 
      src={url} 
      boxSize={`${size}px`}
      borderRadius={roundSize}
      objectFit='cover' 
    />
  )
}

