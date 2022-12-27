import { Box, Flex, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Realtor</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <Box
        maxW={'container.xl'}
        mx='auto'
        p={{ base: 2, md: 6 }}
        minH='calc(100vh - 126px)'
      >
        <main>{children}</main>
      </Box>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
