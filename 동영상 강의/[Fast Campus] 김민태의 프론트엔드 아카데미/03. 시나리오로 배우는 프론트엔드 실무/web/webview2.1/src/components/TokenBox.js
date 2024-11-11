import React from 'react';
import { Box, Stack, HStack, Heading, Center, Spacer, Text } from '@chakra-ui/react';
import { Countdown } from './Countdown';
import Checklist from '../assets/checklist-on.png';

const Primary = 'primary';
const Secondary = 'secondary';

function PrimaryDescription() {
  return (
    <>
      <HStack px={2}>
        <img src={Checklist} width={20} alt="" />
        <Text>한 번에 오직 12토큰씩 충전</Text>
      </HStack>

      <HStack px={2}>
        <img src={Checklist} width={20} alt=""/>
        <Text>1 토큰의 가격은 10,000원</Text>
      </HStack>
    </>
  )
}

function SecondaryDescription() {
  return (
    <>
      <HStack px={2}>
        <img src={Checklist} width={20} alt=""/>
        <Text>12 토큰 가격으로 24 토큰 충전</Text>
      </HStack>

      <HStack px={2}>
        <img src={Checklist} width={20} alt=""/>
        <Text>12명에게만 행운이 돌아갑니다!</Text>
      </HStack>
    </>
  )
}

export default class TokenBox extends React.Component {
  static ChargeType = {
    Primary,
    Secondary,
  };

  render() {
    const { chargeType = Primary } = this.props;
    const background = chargeType === Primary ? '#06E8B1' : '#D9D9D9';
    const buttonColor = chargeType === Primary ? '#3F3E3E' : '#BBBBBB';
    const chargeToken = chargeType === Primary ? 'T12' : 'T24';

    const additionalTime = 30 * 60 * 1000;  
    const chargeTokenOpenTime = new Date().getTime() + additionalTime;
    
    return (
      <Box bg={background} rounded={18} p={8}>
        <Stack gap={2}>
          <Center>
            <Heading size='3xl'>{chargeToken}</Heading>
          </Center>

          <Box bg='#333' height={1}/>

          { chargeType === Primary ? <PrimaryDescription /> : <SecondaryDescription /> }

          <Spacer />  
          <Spacer />  

          <Center>
            <Box as='button' bg={buttonColor} color='#fff' rounded='full' width={200} height={50} fontSize={18}>
              { chargeType === Primary  ? '토큰 충전' : <Countdown targetDate={chargeTokenOpenTime} /> }
            </Box>
          </Center>

          
        </Stack>
      </Box>
    )
  }
}
