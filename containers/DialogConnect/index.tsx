import { Connect } from '@/components/Connect'
import * as Dialog from '@radix-ui/react-dialog'
import { DialogConnectContent } from './content'
import { useEffect, useState } from 'react'
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
        <Dialog.Content className="bg-[--dialog-bg] border-[2px] border-[black] fixed top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] cursor-auto pointer-events-auto">
          <Dialog.Title className="bg-[--primary] p-[10px] font-bold text-[14px] border-b-[2px] border-b-[black]">
            Connect
          </Dialog.Title>
          <Dialog.Content
            className="p-[10px] cursor-auto pointer-events-auto"
            asChild>
            <DialogConnectContent />
          </Dialog.Content>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
