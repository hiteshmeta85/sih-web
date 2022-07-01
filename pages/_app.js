import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import Head from "next/head";

function MyApp({Component, pageProps}) {
  return (
    <ChakraProvider>
      <Head>
        <title>Homebrew</title>
        <meta charSet='utf-8'/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Frontend for SIH Topic GS900"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
