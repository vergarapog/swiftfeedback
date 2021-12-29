import "../styles/globals.css"
import { ChakraProvider } from "@chakra-ui/react"

import { AuthProvider } from "../lib/auth"

import theme from "styles/theme"
import "styles/fonts.css"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
