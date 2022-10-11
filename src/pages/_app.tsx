import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { getDefaultProvider } from 'ethers'
import { WagmiConfig, createClient } from 'wagmi'
import { ChakraProvider } from '@chakra-ui/react'
import { NETWORK_ID } from '../constants'

const wagmiClient = createClient({
  provider: getDefaultProvider(NETWORK_ID),
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <WagmiConfig client={wagmiClient}>
        <Component {...pageProps} />
      </WagmiConfig>
    </ChakraProvider>
  )
}

export default MyApp
