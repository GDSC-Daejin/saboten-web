import '../styles/globals.css'
import Layout from "../component/layout/Layout";
import "../styles/colorToken.scss"

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp
