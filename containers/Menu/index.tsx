import Link from 'next/link'
import { headerMenu } from './contants'

export const Menu = () => {
  return (
    <div className="flex">
      {headerMenu.map(item => {
        return (
          <Link
            className="text-[14px] font-bold"
            href={`/${item.value}`}
            key={item.value}>
            {item.label}
          </Link>
        )
      })}
    </div>
  )
}
