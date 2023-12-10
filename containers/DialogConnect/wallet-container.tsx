import Image from 'next/image'
interface IProps {
  size: number
  value: string
  label: string
  url: string
}
export const WalletContainer = (props: IProps) => {
  return (
    <div className="group flex flex-row items-center gap-[10px] p-[7px] border-[2px] border-[black] bg-[black] cursor-pointer hover:bg-[--primary] ">
      <div className="flex flex-col items-center justify-center w-[20px] h-[20px]">
        <Image
          src={props.url}
          width={props.size}
          height={props.size}
          alt={props.value}
        />
      </div>
      <span className=" font-bold text-[12px] text-[white] group-hover:text-[black]">
        {props.label}
      </span>
    </div>
  )
}
