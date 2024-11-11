import React from 'react';
import { Box, Stack } from '@chakra-ui/react';

export default class PageView extends React.Component {
  render() {
    return (
      <Box p='24px'>
        <Stack gap={4}>{ this.props.children }</Stack>
      </Box>
    )
  }
}
