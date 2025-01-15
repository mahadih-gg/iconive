import { ChooseIcon, SendIcon } from "@/components/Icons";
import Image from "next/image";

const listone = [
    "Non-Surgical Hair Replacement",
    "No harmful effect",
    "Safe & easy to use",
    "Loyal customer base",
]

const listtwo = [
    "Easy return policy",
    "Fast Worldwide Free Shipping",
    "24/7 Customer Service",
    "Regular Order Status Updates",
]

export default function Why__Choose__Section() {
    return (
        <div className="relative">
            <Image className=" w-full h-[1000px] object-cover" src="/images/whychooseus.jpg" alt="Why Choose Us" width={1000} height={1000} />


            <div className="absolute bottom-0 right-[4%] md:right-[10%] w-full h-full bg-[#ffffff] opacity-80 rounded-t-[10px] max-w-[330px] md:max-w-[540px] max-h-[550px] md:max-h-[750px] p-[30px] md:p-[60px]">
                <h2 className="text-black text-right text-[26px] md:text-[30px] font-[600] uppercase pb-[30px] md:pb-[60px]">Why Choose Us</h2>
                {/* content right */}
                <div className="flex flex-col justify-end items-end gap-4">
                    <ChooseIcon />  
                    <ul className="flex flex-col items-end gap-4">
                        {
                            listone?.map((item, index) => (
                                <li key={index} className="text-black text-[14px] md:text-[16px]">
                                    {item}
                                </li>
                            ))
                        }

                    </ul>
                </div>
                {/* content right */}
                <div className="flex flex-col justify-end items-end gap-4 pt-[40px] md:pt-[80px]">
                    <SendIcon />    
                    <ul className="flex flex-col items-end gap-4">
                        {
                            listtwo?.map((item, index) => (
                                <li key={index} className="text-black text-[14px] md:text-[16px]">
                                    {item}
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
        </div>      
    )
}