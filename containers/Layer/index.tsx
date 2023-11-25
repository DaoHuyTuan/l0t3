import { Connect } from '@/components/Connect'

interface ILayerProps {
  children: React.ReactNode
}
export const Layer = (props: ILayerProps) => {
  return (
    <div>
      <span>Events</span>
      <Connect />
      {props.children}
    </div>
  )
}
