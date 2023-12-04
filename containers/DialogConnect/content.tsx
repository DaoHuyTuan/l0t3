import * as Dialog from '@radix-ui/react-dialog'
import React from 'react'

export const DialogConnectContent = React.forwardRef<HTMLDivElement>(
  (props, forwardRef) => {
    return (
      <div
        ref={forwardRef}
        {...props}></div>
    )
  }
)

DialogConnectContent.displayName = 'DialogConnectContent'
