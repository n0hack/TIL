import { 
  Input, 
  InputGroup, 
  InputLeftElement, 
  InputRightElement,
  InputRightAddon,
  Icon,
} from '@chakra-ui/react';
import {
  SearchIcon
} from '@chakra-ui/icons';
import { AiFillAudio } from 'react-icons/ai';


export const SearchInput = ({  }) => {
  return (
    <InputGroup>
      <InputLeftElement children={<SearchIcon color='gray.500' />} />
      <Input type='text' placeholder='Search' rounded={16} backgroundColor='gray.100' />
      <InputRightElement children={<Icon as={AiFillAudio} color='gray.500'/>}/>
    </InputGroup>
  )
};
