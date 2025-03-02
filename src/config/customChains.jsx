import { defineChain } from "@reown/appkit/networks"

export const vanarTestNet = defineChain({
    id: 1947,
    name: 'Vanar Testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'VANRY',
      symbol: 'VANRY',
    },
    rpcUrls: {
      default: {
        http: ['https://rpc.bimtvi.com'],
      },
    },
    blockExplorers: {
      default: { name: 'Explorer', url: 'https://explorer.bimtvi.com' },
    },
  })
  
  export const vanguard = defineChain({
    id: 78600,
    name: 'Vanguard',
    nativeCurrency: {
      decimals: 18,
      name: 'VANRY',
      symbol: 'VANRY',
    },
    rpcUrls: {
      default: {
        http: ['https://rpc-vanguard.vanarchain.com'],
      },
    },
    blockExplorers: {
      default: { name: 'Explorer', url: 'https://explorer-vanguard.vanarchain.com' },
    },
  })
  
  export const vanarMainnet = defineChain({
    id: 2040,
    name: 'Vanar Mainnet',
    nativeCurrency: {
      decimals: 18,
      name: 'VANRY',
      symbol: 'VANRY',
    },
    rpcUrls: {
      default: {
        http: ['https://rpc.vanarchain.com'],
      },
    },
    blockExplorers: {
      default: { name: 'Explorer', url: 'https://explorer.vanarchain.com' },
    },
  })