import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`, // Defaults to weight 400 with normal variant.
    body: `'Raleway', sans-serif`, // Defaults to weight 700 with normal variant.
  },
})

export default theme

// add import statement add top of page if you want to override the default.
// import "@fontsource/open-sans/500.css"; // Weight 500.
// import "@fontsource/open-sans/900-italic.css"; // Italic variant. // Weight 900.