import * as HoverCard from '@radix-ui/react-hover-card'
import { GasStationTrigger } from './trigger'
import { GasStationPortal } from './portal'
import { Fuel, ChevronDown } from 'lucide-react'

export const GasStation = () => {
  return (
    <HoverCard.Root open={true}>
      <HoverCard.Trigger asChild>
        <GasStationTrigger />
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content>
          <GasStationPortal />
          <HoverCard.Arrow className="fill-white" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  )
}
