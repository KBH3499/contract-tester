
import { createAppKit } from '@reown/appkit/react'

import { WagmiProvider } from 'wagmi'
import {mainnet, arbitrum, polygon, optimism, sepolia} from '@reown/appkit/networks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { vanarMainnet, vanarTestNet, vanguard } from '../config/customChains';

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId from https://cloud.reown.com
const projectId = '4719d3708f4c5626f9717ce01b88ff71'

// 2. Create a metadata object - optional
const metadata = {
  name: 'Virtua WalletConnect',
  description: 'Virtua WalletConnect',
  url: 'https://reown.com/appkit', // origin must match your domain & subdomain
  icons: ['https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/ca16e451-ee3b-401b-9432-f28febd59800/sm']
}

// 3. Set the networks (Only allow popular networks)
const networks = [
  vanarTestNet,
  vanguard,
  vanarMainnet,
  sepolia,
  mainnet,
  arbitrum,
  optimism,
  polygon,
];

// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true
});

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    email: false,
    socials: false,
    swaps: false,
    send: false,
    history: false,
    onramp: false,
    receive: false,
    analytics: true,
    
  },
  featuredWalletIds: [
    'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
    'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa'
  ]
})

export function AppKitProvider({ children }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
    