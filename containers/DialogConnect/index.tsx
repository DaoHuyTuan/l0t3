import { Connect } from '@/components/Connect'
import * as Dialog from '@radix-ui/react-dialog'
import { DialogConnectContent } from './content'
export const DialogConnect = () => {
  return (
    <Dialog.Root open={true}>
      <Dialog.Trigger asChild>
        <Connect />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content className="fixed top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
          <Dialog.Title>Users</Dialog.Title>
          <Dialog.Description>
            The following users have access to this project.
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
