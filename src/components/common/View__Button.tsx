import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function View__Button({ href, label, color, iconClass }: { href: string, label: string, color?: string, iconClass?: string }) {
    return (
        <Link href={href} className={`text-[14px] md:text-lg font-[400] ${color ? color : "text-[#666666]"} flex items-center flex-col gap-0 hover:text-primary hover:underline underline-offset-4 transition-all duration-300 group`}>
            <span>{label}</span>
            <ChevronDown  className={`${color ? color : "text-[#666666]"} group-hover:text-primary transition-all duration-300 ${iconClass ? iconClass : "w-[16px] h-[16px]"}`} />
        </Link>
    )
}