import React from 'react'
import MetamaskLogo from './assets/logo/metamask.svg'

import { wallets } from './wallets'
import { WalletContainer } from './wallet-container'
export const DialogConnectContent = React.forwardRef<HTMLDivElement>(
  (props, forwardRef) => {
    return (
      <div
        className="p-[20px] w-[400px]"
        ref={forwardRef}
        {...props}>
        <span>Choose a wallet to connect</span>
        <div className="flex gap-[20px]">
          {wallets.map(wallet => {
            return (
              <WalletContainer
                key={wallet.value}
                label={wallet.label}
                value={wallet.value}
                size={Number(wallet.size)}
                url={wallet.url}
              />
            )
          })}
        </div>
      </div>
    )
  }
)

DialogConnectContent.displayName = 'DialogConnectContent'
