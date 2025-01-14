import Image from "next/image";
import Link from "next/link";
import { Raleway } from "next/font/google";

const raleway = Raleway({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Wholesallers__Section() {
    return (
        <div className="md:container pt-[40px] pb-[240px] md:py-[80px]">
            <div className="flex justify-end items-center relative">
                <Image src="/images/wholesale-Image.jpg" alt="wholesallers" width={1000} height={690} className="object-contain" />

                <div className=" absolute top-[40%] md:top-[20%] left-[5%] md:left-0 max-w-[350px] md:max-w-[847px] h-[375px] md:h-[428px] rounded-[5px] shadow-md bg-[#F9F5F0] flex items-center md:items-start justify-center flex-col gap-4 px-4 md:px-10 py-4 md:py-5">
                    <h2 className={`text-[26px] md:text-[21px] font-[700] text-[#0E0D0D] ${raleway.className}`}>For Wholesellers</h2>
                    <p className="text-[14px] md:text-lg font-[400] text-[#0E0D0D] leading-[28px] md:leading-[38px] text-center md:text-left">
                        Shop wigs in bulk at discounted prices in our wholesale section. Ideal for resellers or stocking up on your favorite styles, explore a wide range of wig types, colors, and styles with customization options, fast shipping, and dedicated support. Minimum order quantities may apply, start saving on your wig purchases now.
                    </p>

                    <Link href="/wholesale" className="pt-2 md:pt-[60px] text-sm font-[400] text-[#999999] underline underline-offset-8 hover:text-primary hover:underline-offset-4 transition-all duration-300">
                        View Wholesale Shop
                    </Link>

                </div>
            </div>
        </div>
    )
}