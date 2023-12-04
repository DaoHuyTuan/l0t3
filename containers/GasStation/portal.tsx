import { ChevronDown, Fuel } from 'lucide-react'
import { FaGasPump } from 'react-icons/fa'
import { RiSpeedUpFill, RiSlowDownFill } from 'react-icons/ri'
import * as Separator from '@radix-ui/react-separator'
import { CircleLoading } from '@/components/circle-loading'

export const GasStationPortal = () => {
  return (
    <div className="flex shadow-[0_0px_5px_1px_rgba(0,0,0,0.3)] bg-[white] px-[15px] py-[15px] flex-col gap-[10px] min-w-[200px] rounded-[5px] animate-fade cursor-pointer">
      <div className="flex flex-col border-[1px] px-[10px] py-[10px] bg-[--primary] rounded-[5px] border-[2px] border-[black]">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-[5px]  ">
              <FaGasPump size={12} />
              <span className="text-[10px] font-bold">ETH current gas</span>
              <ChevronDown size={12} />
            </div>
            <div className="flex justify-between">
              <span className="text-[20px] font-bold ">25.43 Gwei</span>
            </div>
          </div>
          <CircleLoading />
        </div>
      </div>
      <div className="flex flex-row gap-[10px]">
        <div className="flex flex-col gap-[5px] rounded-[5px]">
          <div className="flex flex-row items-center gap-[5px]">
            <span className="text-[10px] font-bold">Low</span>
          </div>
          <div className="flex items-start gap-[5px] w-full flex-col">
            <span className="text-[10px] font-bold">$1.26—$4.03</span>
            <span className="text-[8px] text-[#3a3a3add]">
              0.02ETH - 0.034ETH
            </span>
          </div>
        </div>

        <Separator.Root
          className="bg-[#ddd] h-auto w-[1px]"
          orientation="vertical"
          decorative
        />
        <div className="flex flex-col gap-[5px] rounded-[5px]">
          <div className="flex flex-row items-center gap-[5px]">
            <span className="text-[10px] font-bold">Standard</span>
          </div>
          <div className="flex items-start gap-[5px] w-full flex-col">
            <span className="text-[10px] font-bold">$1.26—$4.03</span>
            <span className="text-[8px] text-[#3a3a3add]">
              0.02ETH - 0.034ETH
            </span>
          </div>
        </div>
        <Separator.Root
          className="bg-[#ddd] h-auto w-[1px]"
          orientation="vertical"
          decorative
        />
        <div className="flex gap-[5px] flex-col ">
          <div className="flex items-center gap-[5px]">
            <span className="text-[10px] font-bold">High</span>
          </div>
          <div className="flex items-start w-full flex-col">
            <span className="text-[10px] font-bold">$1.26—$4.03</span>
            <span className="text-[8px] text=[#3a3a3add]">
              0.02ETH - 0.034ETH
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
