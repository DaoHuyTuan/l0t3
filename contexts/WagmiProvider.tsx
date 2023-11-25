import { wagmiConfig } from '@/lib/wagmi'
import { WagmiConfig } from 'wagmi'

interface ProvidersProps {
  children: React.ReactNode
}

export const WagmiProvider = ({ children }: ProvidersProps) => {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
}
