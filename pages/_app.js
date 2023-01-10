import { ChakraProvider } from '@chakra-ui/react';
import { Router } from 'next/router';
import nProgress from 'nprogress';
import Layout from '../components/Layout';
import '../styles/globals.css';
import 'nprogress/nprogress.css';

export default function App({ Component, pageProps }) {
  nProgress.configure({ showSpinner: false });

  Router.events.on('routeChangeStart', () => nProgress.start());
  Router.events.on('routeChangeComplete', () => nProgress.done());

  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
