import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
import { calculateRatio } from '../../utils'
import styles from '../../styles/Home.module.css'

const ProductItem = props => {
  const [photo] = props.photos;
  const { width, height } = calculateRatio(photo.width, photo.height, 200);
  const [zone, imagePath] = photo.url.split(',');
  const imageUrl = `${props.cdn}/${zone}/small/${imagePath}`;
  
  return (
    <li key={props.id}>      
      <Image src={imageUrl} width={width} height={height} />
      <img src={imageUrl} alt={props.productName} />
      {props.productName}
    </li>
  )
}

export default function Products(props) {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>PoC</title>
        <meta name="description" content="SSR Proof of Concept" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Products</h1>

      <ul>
        { props.data.map(product => ProductItem({ ...product, cdn: props.config.server.cdn }) ) }
      </ul>

      <Link href="/"><a>Home</a></Link>
    </div>
  )
}

export async function getServerSideProps() {
  const result = await axios.get('http://api.12shop.com:3000/products')
  
  return {
    props: {
      data: result.data,
    }
  }
}
