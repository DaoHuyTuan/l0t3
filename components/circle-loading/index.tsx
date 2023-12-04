import Image from 'next/image'

export const CircleLoading = () => {
  return (
    <div className="flex w-[40px] h-[40px]">
      <Image
        className="w-[40px] h-[40px]"
        width={40}
        height={40}
        src={'/assets/loading/progess-pie.svg'}
        alt="loading"
      />
    </div>
  )
}
