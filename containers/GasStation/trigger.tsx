import { ChevronDown, Fuel } from 'lucide-react'
import React from 'react'
import { FaGasPump } from 'react-icons/fa'
export const GasStationTrigger = React.forwardRef<HTMLDivElement>(
  (props, forwardedRef) => {
    return (
      <div
        className="flex items-center gap-[5px] h-[14px] cursor-pointer py-[15px]"
        ref={forwardedRef}
        {...props}>
        <FaGasPump size={14} />
        <span className="text-[14px] leading-[13px]">45.26 Gwei</span>
        <ChevronDown size={14} />
      </div>
    )
  }
)
