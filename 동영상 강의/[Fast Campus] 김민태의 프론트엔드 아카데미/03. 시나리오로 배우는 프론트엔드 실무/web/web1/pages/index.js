import Head from 'next/head';
import axios from 'axios';
import { calculateRatio } from '../utils';
import config from '../config';

const ProductItem = props => {
  const [photo] = props.photos;
  const { width, height } = calculateRatio(photo.width, photo.height, 200);
  const [zone, imagePath] = photo.url.split(',');
  const imageUrl = `${config.server.cdn}/${zone}/small/${imagePath}`;
  const ratioClass = width > height ? 'circular--landscape' : 'circular--portrait';
  
  return (
    <div className="justify-self-center">      
      <div className={[ratioClass].join(' ')}>
        <img src={imageUrl} alt={props.productName} />
      </div>    
      <p className="text-xs text-center mt-2">{props.productName}</p>
    </div>
  )
}

export default function Home(props) {
  return (
    <div className="container mx-auto bg-[url('/images/cover.png')] bg-cover w-f h-96">
      <Head>
        <title>12shop.com 으로 오세요</title>
      </Head>
      <div className="absolute card rounded-t-lg bg-gray-100 top-1/3 p-8">
        <div className="flex flex-col gap-2 justify-content">
          <p className="self-center text-gray-700 text-2xl">12shop</p>
        </div>
        <div className="container grid grid-cols-3 gap-8 mx-auto mt-10">
          { props.data.map(product => ProductItem({ ...product }) ) }
        </div>

        <p className="text-center text-gray-400 text-xs mt-24 mb-24">12Company © 2022</p>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const result = await axios.get(`${config.server.b2c}/products`)
    
    return {
      props: {
        data: result.data,
      }
    }
  } catch(e) {
    throw(e);
  }
}
