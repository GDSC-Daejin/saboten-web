import '../styles/globals.css'
import Layout from "../component/layout/Layout";
import "../styles/colorToken.scss"
import "swiper/css/bundle";
import {ReactQueryDevtools} from "react-query/devtools";
import {QueryClientProvider} from 'react-query'
import {queryClient} from "../service/queryClient";

function MyApp({ Component, pageProps }) {
  return (
      <>
          <QueryClientProvider client={queryClient}>
              <Layout>
                  <Component {...pageProps} />
              </Layout>
              <ReactQueryDevtools/>
          </QueryClientProvider>
      </>
  );
}

export default MyApp
