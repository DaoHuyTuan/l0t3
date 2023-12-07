import Image from 'next/image'
interface IProps {
  size: number
  value: string
  label: string
  url: string
}
export const WalletContainer = (props: IProps) => {
  return (
    <div className="flex flex-col items-center gap-[5px] min-w-[110px] border-[2px] border-[--border-color] rounded-[5px] p-[5px] cursor-pointer">
      <div className="flex items-center justify-center w-[30px] h-[30px]">
        <Image
          src={props.url}
          width={props.size}
          height={props.size}
          alt={props.value}
        />
      </div>
      <span className="text-[--text-color] font-bold text-[10px]">
        {props.label}
      </span>
    </div>
  )
}
