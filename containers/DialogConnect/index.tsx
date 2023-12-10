import { Connect } from '@/components/Connect'
import * as Dialog from '@radix-ui/react-dialog'
import { DialogConnectContent } from './content'
import { useEffect, useState } from 'react'
import { Wallet, X } from 'lucide-react'
import * as Separator from '@radix-ui/react-separator'
export const DialogConnect = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(true)
  }, [])

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Connect />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-[--dialog-overlay-color] fixed inset-[0]" />
        <Dialog.Content className="flex flex-col z-[1] bg-white p-[20px] shadow-[0_0px_5px_1px_rgba(0,0,0,0.3)] fixed top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] cursor-auto pointer-events-auto gap-[15px]">
          <div className="font-bold text-[14px] flex text-[14px] font-bold items-center justify-between">
            <div className="flex gap-[10px] items-center">
              <Wallet />
              Connect wallet
            </div>

            <Dialog.Close
              aria-label="Close"
              className="flex w-[24px] h-[24px] cursor-pointer items-center justify-center">
              <X size={18} />
            </Dialog.Close>
          </div>
          <Separator.Root
            className="bg-[#ddd] h-[1px] w-full"
            decorative
          />
          <DialogConnectContent />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
