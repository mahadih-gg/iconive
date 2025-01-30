import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

export default function Other__Hero({ page, title, image }: { page?: string, title: string, image: string }) {
  return (
    <div className={`relative ${page === "checkout" ? "md:h-[300px] h-[200px]" : "md:h-[600px] h-[300px]"}`}>
        <Image src={image} alt="iconive" fill className="w-full object-cover" loading="lazy" blurDataURL={image} placeholder="blur" />
        <h1 className={`${raleway.className} ${["offers", "checkout"].includes(page || "") ? 'md:text-[51px] text-[28px] max-w-[490px]' : 'uppercase md:text-[72px] text-[48px] '}  font-[600] ${page === "checkout" ? "text-black" : "text-white"} absolute top-1/2 left-1/2  text-center -translate-x-1/2 -translate-y-1/2 text-shadow-lg`}>{title}</h1>

        {
          page === "checkout" ? (
            <div className="text-[14px] md:text-base flex justify-center items-center gap-2 text-[#666] absolute top-[63%] left-1/2 -translate-x-1/2">
              <span>Home</span>
              /
              <span>Checkout</span>
            </div>
          ): null
        }
    </div>
  )
}