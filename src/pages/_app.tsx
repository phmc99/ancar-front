import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { wrapper } from '../store';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default wrapper.withRedux(App);
