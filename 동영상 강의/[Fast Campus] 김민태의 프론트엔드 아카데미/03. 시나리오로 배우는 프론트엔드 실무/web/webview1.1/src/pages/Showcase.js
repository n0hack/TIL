import { useEffect } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { Link  } from 'react-router-dom';
import { PageView, Header, SearchInput, ProductCard } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../common/store/features/product';
import { buildCDNUrl } from '../common';
import { AppLogger } from 'app-logger';

export default function Showcase() {
  const dispatch = useDispatch();
  const remoteServer = useSelector(state => state.config.server);
  const products = useSelector(state => state.product.items);

  useEffect(() => {
    AppLogger.add({ 
      event: 'enter', 
      screen: 'home', 
      user: 'ibare',
    });
  
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <PageView>
        <Header title='쇼케이스' />
        <SearchInput />
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        {products.map(({ id, productName, photos }) => {
          const imageUrl = buildCDNUrl(photos[0], 'small', remoteServer.cdn);
          
          return (
            <GridItem key={id}>
              <Link to={`/detail/${id}`} onClick={() => AppLogger('home', 'click', 'ibare', 'product card') }>
                <ProductCard title={productName} url={imageUrl} />
              </Link>
            </GridItem>
          );
        })}
        </Grid>
      </PageView>
    </>
  );
}
