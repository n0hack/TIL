import React from 'react';
import { Box, Stack } from '@chakra-ui/react'

export const PageView = ({ children  }) => {

  return (    
    <Box p='24px'>
      <Stack gap={4}>{children}</Stack>
    </Box>
  )
}
