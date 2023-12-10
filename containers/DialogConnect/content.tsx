import React from 'react'
import MetamaskLogo from './assets/logo/metamask.svg'

import { wallets } from './wallets'
import { WalletContainer } from './wallet-container'
export const DialogConnectContent = React.forwardRef<HTMLDivElement>(
  (props, forwardRef) => {
    return (
      <div
        className="flex flex-col  w-[300px] gap-[20px] rounded-[5px]"
        ref={forwardRef}
        {...props}>
        <div className="flex gap-[20px] flex-col w-full">
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
        <div className="flex justify-center">
          <span className="text-[12px] text-center">
            By using L0t3, you agree to our <strong>Terms of Service</strong>{' '}
            and our <strong>Privacy Policy</strong>.
          </span>
        </div>
      </div>
    )
  }
)

DialogConnectContent.displayName = 'DialogConnectContent'
