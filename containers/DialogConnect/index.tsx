import { Connect } from '@/components/Connect'
import * as Dialog from '@radix-ui/react-dialog'
import { DialogConnectContent } from './content'
import { useEffect, useState } from 'react'
import { Wallet } from 'lucide-react'
import * as Separator from '@radix-ui/react-separator'
export const DialogConnect = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(true)
  }, [])

  return (
    <Dialog.Root open={open}>
      <Dialog.Trigger asChild>
        <Connect />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-[--dialog-overlay-color] fixed inset-[0]" />
        <Dialog.Content className="bg-[--dialog-bg] p-[20px] border-[2px] border-[black] fixed top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] rounded-[10px] cursor-auto pointer-events-auto">
          <div className="p-[10px] font-bold text-[14px] flex gap-[10px] text-[18px] font-bold items-center bg-[--primary] border-[2px] border-[black] rounded-[5px] mb-[20px]">
            <Wallet />
            Connect wallet
          </div>
          <Separator.Root
            className="bg-[#ddd] h-[2px] w-full"
            decorative
          />
          <DialogConnectContent />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
