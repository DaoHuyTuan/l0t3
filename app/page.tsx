'use client'
import 'inter-ui/inter.css'
import { WagmiProvider } from '@/contexts/WagmiProvider'
import { ButtonMint } from '@/components/btn-mint'

export default function Home() {
  return (
    <WagmiProvider>
      <main>
        <div className="flex justify-center">
          <ButtonMint />
        </div>
      </main>
    </WagmiProvider>
  )
}
