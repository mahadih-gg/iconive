import Image from "next/image";
import Link from "next/link";

export default function Hair__Replacement__Item() {
    return (
        <div className="flex flex-col gap-4 bg-white rounded-lg shadow-md mt-0 md:-mt-[100px]">
            <div >
                <Image className="object-contain   " src="/images/products/hair-replace.png" alt="hair__replacement__item" width={600} height={600} />
            </div>
            <div className="flex flex-col gap-4 px-5 pb-5">
                <Link href="/">
                <h2 className="text-[15px] md:text-[20px] font-[600] text-[#0E0D0D] hover:text-primary hover:underline underline-offset-4 transition-all duration-300 ">Mix base system</h2></Link>
                <ul className="flex flex-col gap-2 list-disc list-inside text-xs md:text-sm font-[400] text-[#0E0D0D]">
                    <li>made by 100% human hair</li>
                    <li>100% hand-tied</li>
                    <li>100% hand-tied</li>
                    <li>100% hand-tied</li>
                </ul>
            </div>
        </div>
    )
}