import { Connect } from '@/components/Connect'
import { Header } from '../Header'

interface ILayerProps {
  children: React.ReactNode
}
export const Layer = (props: ILayerProps) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}
