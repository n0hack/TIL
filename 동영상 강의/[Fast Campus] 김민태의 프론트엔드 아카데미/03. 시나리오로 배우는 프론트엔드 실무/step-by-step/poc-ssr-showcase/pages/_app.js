import '../styles/globals.css'

const Server = {
  b2c: "http://api.12shop.com:3000",
  cdn: "http://cdn.12shop.com:6060",
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} config={{ server: Server }} />
}

export default MyApp
