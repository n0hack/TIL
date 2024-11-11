import { SearchInput } from '../components';
import { ChakraProvider } from '@chakra-ui/react'

export default {
  component: SearchInput,
  title: '12shop/complex/SearchInput',
};

const Template = args => <ChakraProvider><SearchInput {...args} /></ChakraProvider>;

export const Default = Template.bind({});

Default.args = {

};
