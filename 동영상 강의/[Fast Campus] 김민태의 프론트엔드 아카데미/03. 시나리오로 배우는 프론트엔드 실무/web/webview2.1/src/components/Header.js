import React from 'react';
import { Flex, Box, Heading, Button, Spacer } from '@chakra-ui/react'

export default class Header extends React.Component {

  render() {
    const { title } = this.props;
    
    return (
      <Flex mt={2} mb={6}>
        <Box width={20}>
          <Spacer />
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
}
