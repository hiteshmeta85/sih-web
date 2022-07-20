import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import Head from "next/head";
import theme from "../theme";
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import dynamic from 'next/dynamic';
const ProgressBar = dynamic(() => import('../components/ProgressBar/ProgressBar'), { ssr: false });

function MyApp({Component, pageProps}) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Homebrew</title>
        <meta charSet='utf-8'/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Frontend for SIH Topic GS900"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <ProgressBar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp