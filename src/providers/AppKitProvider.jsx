
import { createAppKit } from '@reown/appkit/react'

import { WagmiProvider } from 'wagmi'
import {mainnet, arbitrum, polygon, optimism, sepolia} from '@reown/appkit/networks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { vanarMainnet, vanarTestNet, vanguard } from '../config/customChains';
import icon from "./assets/logo.png"; // Ensure you have the logo in the correct path

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId from https://cloud.reown.com
const projectId = '9e503f707417be1f6eb865081c5781c1'

// 2. Create a metadata object - optional
const metadata = {
  name: 'OpenABI Explorer',
  description: 'OpenABI Explorer',
  url: 'https://reown.com/appkit',
  icons: [icon] // Dynamically load the local file
};

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
    