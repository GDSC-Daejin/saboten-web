import '../styles/globals.css'
import Layout from "../component/layout/Layout";
import "../styles/colorToken.scss"
import "swiper/css/bundle";
import {ReactQueryDevtools} from "react-query/devtools";
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient();

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
