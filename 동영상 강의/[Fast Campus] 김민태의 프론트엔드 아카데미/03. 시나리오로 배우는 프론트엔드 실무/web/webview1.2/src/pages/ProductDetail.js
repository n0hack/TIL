import React, { useEffect } from 'react';
import { useParams  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { PageView, Header, RoundedBox } from '../components';
import { Box, Text, Badge, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { fetchProductOne } from '../common/store/features/product';
import { buildCDNUrl } from '../common';
import { AppLogger } from 'app-logger';

function Body({ config, data }) {
  if (!data) return <></>;

  const imageUrl = buildCDNUrl(data.photos[0], 'large', config.cdn);

  return (
    <>
      <RoundedBox url={imageUrl} size='100%' roundSize={10} />
      <Box p={2}>
        <Box display='flex' alignItems='baseline'>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            새롭게 추가된 상품 &bull; 놀라운 인기!
          </Box>
        </Box>

        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          &nbsp;
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {data.productName}
          </Box>
        </Box>

        <Text fontSize='sm' noOfLines={15} mt={2}>
          {data.detailDescription}
        </Text>

        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < 4 ? 'yellow.300' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            321 reviews
          </Box>
        </Box>

        <br />
        <br />
        <br />
        {/* <a href="shop12app://home">12SHOP</a> */}
        <br />
        <a href="exp://127.0.0.1:19000/--/home">Back to home screen</a>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Box>
    </>
  )
}

export default function ProductDetail() {
  const dispatch = useDispatch();
  const remoteServer = useSelector(state => state.config.server);
  const product = useSelector(state => state.product);
  const { id } = useParams();

  useEffect(() => {
    AppLogger.add({ 
      event: 'enter', 
      screen: 'detail', 
      user: 'ibare',
    });
  
    dispatch(fetchProductOne(id));
  }, []);

  return (
    <>
      <PageView>        
        <Header title='제품 상세' back='/' /> 
        <SkeletonText isLoaded={product.status.item} noOfLines={12} spacing='4'>
          <Body config={remoteServer} data={product.item} />
        </SkeletonText>
      </PageView>
    </>
  );
}
