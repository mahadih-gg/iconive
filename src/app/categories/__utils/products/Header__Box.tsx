import { Filter } from "lucide-react";
import Sort from "./Sort";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ['latin'], weight: ['600', '400'] })

export default function Header__Box() {
    return (
        <div className={`${raleway.className} flex justify-between items-center pb-10`}>

            <h4 className={` text-[16px] md:text-[22px] font-[600] flex items-center gap-2 uppercase text-black`}>
                <span>Filters</span>
                <Filter className="w-4 h-4 md:w-6 md:h-6" />
            </h4>

            <div className="flex items-center gap-5 md:gap-20">
                <h4 className="text-[16px] font-[400] text-black uppercase md:block hidden " >sort by</h4>
                <div>
                    <Sort />
                </div>
            </div>

        </div>
    )
}