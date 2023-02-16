import '../styles/globals.css'
import Layout from "../component/layout/Layout";
import "../styles/colorToken.scss"
import "swiper/css/bundle";
import {ReactQueryDevtools} from "react-query/devtools";
import {QueryClientProvider} from 'react-query'
import {queryClient} from "../service/queryClient";
import {RecoilRoot} from "recoil";

function MyApp({ Component, pageProps }) {
  return (
      <>
          <QueryClientProvider client={queryClient}>
              <RecoilRoot>
                  <Layout>
                      <Component {...pageProps} />
                  </Layout>
                  <ReactQueryDevtools/>
              </RecoilRoot>
          </QueryClientProvider>
      </>
  );
}

export default MyApp
