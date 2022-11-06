import '../styles/globals.css'
import Layout from "../component/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp
