import React from 'react'
import MetamaskLogo from './assets/logo/metamask.svg'

import { wallets } from './wallets'
import { WalletContainer } from './wallet-container'
export const DialogConnectContent = React.forwardRef<HTMLDivElement>(
  (props, forwardRef) => {
    return (
      <div
        ref={forwardRef}
        {...props}>
        <div className="flex gap-[10px]">
          {wallets.map(wallet => {
            return (
              <WalletContainer
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
