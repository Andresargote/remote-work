import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  )
}

export default MyApp;
