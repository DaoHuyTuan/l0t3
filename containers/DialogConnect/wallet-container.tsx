import Image from 'next/image'
interface IProps {
  size: number
  value: string
  label: string
  url: string
}
export const WalletContainer = (props: IProps) => {
  return (
    <div className="flex flex-row items-center gap-[5px] px-[5px] py-[3px] border-[2px] border-[transparent] cursor-pointer hover:border-[2px]">
      <div className="flex flex-col items-center justify-center w-[30px] h-[30px]">
        <Image
          src={props.url}
          width={props.size}
          height={props.size}
          alt={props.value}
        />
        <span className=" font-bold text-[10px]">{props.label}</span>
      </div>
    </div>
  )
}
