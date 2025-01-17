import Image from "next/image";

export default function Other__Hero({ title }: { title: string }) {
  return (
    <div className="relative md:h-[600px] h-[300px]">
        <Image src="/wholesale.jpg" alt="iconive" fill className="w-full object-cover" />
        <h1 className="md:text-[72px] text-[48px] font-[600] text-white uppercase text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{title}</h1>
    </div>
  )
}