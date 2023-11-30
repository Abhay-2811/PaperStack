'use client'

import * as React from 'react'
import {
  RainbowKitProvider,
  getDefaultWallets,
  midnightTheme
} from '@rainbow-me/rainbowkit'

import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { filecoinCalibration, filecoin } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { NextUIProvider } from '@nextui-org/react'

const defaultChains = [
  {
    ...filecoinCalibration,
    iconUrl:
      'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency/128/Filecoin-icon.png'
  },
  {
    ...filecoin,
    iconUrl:
      'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency/128/Filecoin-icon.png'
  }
]

const { chains, publicClient } = configureChains(defaultChains, [
  publicProvider()
])

const { connectors } = getDefaultWallets({
  appName: 'Paper Stack',
  projectId: 'db1b8a46ffa835bd9a48a89ff540f990',
  chains
})

const demoAppInfo = {
  appName: 'Paper Stack'
}

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

export function Providers ({ children }) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return (
    <NextUIProvider>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider
          chains={chains}
          initialChain={filecoinCalibration.id}
          appInfo={demoAppInfo}
          theme={midnightTheme({
            accentColor: '#76a9fa',
            accentColorForeground: 'black',
            borderRadius: 'medium'
          })}
          coolMode
          modalSize='compact'
        >
          {mounted && children}
        </RainbowKitProvider>
      </WagmiConfig>
    </NextUIProvider>
  )
}
