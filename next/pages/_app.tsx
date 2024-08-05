import { theme } from '@/utils/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'

import Layout from '@/components/Layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </ChakraProvider>
  )
}
