'use client'
import 'inter-ui/inter.css'
import { WagmiProvider } from '@/contexts/WagmiProvider'

export default function Home() {
  return (
    <WagmiProvider>
      <main className="flex"></main>
    </WagmiProvider>
  )
}
