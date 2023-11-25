import {
  configureChains,
  mainnet,
  InjectedConnector,
  sepolia
} from '@wagmi/core'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { publicProvider } from 'wagmi/providers/public'
import { createConfig } from 'wagmi'

const { chains, publicClient } = configureChains(
  [mainnet, sepolia],
  [publicProvider()],
  { pollingInterval: 10000 }
)

export const metaMaskConnector = new MetaMaskConnector({
  chains,
  options: {
    shimDisconnect: false
  }
})

export const injectedConnector = new InjectedConnector({
  chains,
  options: {
    shimDisconnect: false
  }
})

export const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
  connectors: [metaMaskConnector, injectedConnector]
})
