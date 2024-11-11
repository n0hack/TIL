import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Heading, Button, Spacer } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons';

export const Header = ({ title, back = '' }) => {

  return (
      <Flex mt={2} mb={6}>
        <Box width={20}>
          { back === '' 
            ? <Spacer /> 
            : <Link to={back}><Button size='lg' bgColor={'white'} leftIcon={<ArrowBackIcon w={6} h={6}/>} /></Link>
          }
        </Box>
        <Spacer />
        <Box>
          <Heading as='h1' size='xl' noOfLines={1}>{title}</Heading>
        </Box>
        <Spacer />
        <Box width={20}>
          <Spacer />
        </Box>
      </Flex>
  )
}
