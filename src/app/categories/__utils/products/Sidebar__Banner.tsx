import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { Josefin_Sans } from "next/font/google";

const josefin_sans = Josefin_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
})

export default function Sidebar__Banner() {
    return (
        <div className="categories__banner bg-[#F6F6F6] rounded-[10px] px-5 py-10 h-[900px] relative cursor-pointer">
            <div className="absolute top-10 left-8 z-10">
                <p className="text-[24px] font-[500] text-white ">
                    Check Out Our Hottest Collections of
                    This <span className="flex items-center gap-2">Summer <ChevronRightIcon className="w-5 h-5 text-white" /></span>
                </p>
                
            </div>
            <Image src="/images/sidebar-banner.jpg" alt="banner" fill className="object-cover rounded-[10px]" />

            {/* center text     */}

            <h3 className={`absolute bottom-5 left-[30%] z-10 text-[28px] font-[600] uppercase text-white ${josefin_sans.className}`}>
                ICONIVE.
            </h3>
        </div>
    )
}