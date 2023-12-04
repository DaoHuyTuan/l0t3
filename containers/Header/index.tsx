import { Connect } from '@/components/Connect'
import { Menu } from '../Menu'
import { GasStation } from '../GasStation'
import { DialogConnect } from '../DialogConnect'

export const Header = () => {
  return (
    <div className="flex px-[20px] py-[20px] justify-end items-center gap-[20px]">
      <Menu />
      <GasStation />
      <DialogConnect />
    </div>
  )
}
