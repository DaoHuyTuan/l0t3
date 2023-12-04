import React from 'react'

export const Connect = React.forwardRef<HTMLButtonElement>(
  (props, forwardRef) => {
    return (
      <button
        {...props}
        ref={forwardRef}
        className="bg-[--primary] border-[2px] border-[black] text-[color:--text-color] py-[5px] px-[20px] text-[length:--btn-font-size] font-bold hover:bg-[--primary-hover]">
        Connect
      </button>
    )
  }
)

Connect.displayName = 'Connect'
