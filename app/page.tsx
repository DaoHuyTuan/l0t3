'use client'
import 'inter-ui/inter.css'
import { WagmiProvider } from '@/contexts/WagmiProvider'
import { ButtonMint } from '@/components/btn-mint'
import { CountDown } from '@/containers/CountDown'

export default function Home() {
  return (
    <WagmiProvider>
      <main>
        <div className="flex justify-center">
          <CountDown />
          <ButtonMint />
        </div>
      </main>
    </WagmiProvider>
  )
}
