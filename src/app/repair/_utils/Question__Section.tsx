import { Button } from "@/components/ui/button";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ['latin'], weight: ['400', '500', '700'] })

export default function Question__Section() {
    return (
        <div style={{ backgroundImage: `url('/images/question_section.jpg')` }} className="h-[900px] bg-cover bg-center bg-no-repeat">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[70px] items-center place-items-center h-full">
                <div>
                </div>
                <div className="info__container bg-[#FEFEFE] max-w-[672px] w-full rounded-[10px] p-[40px]">
                    <h2 className={`${raleway.className} text-[28px] md:text-[45px] font-[500] pb-5`}>Ask us a question</h2>
                    <p className="text-[18px] md:text-[24px] font-[400]">
                        If you have any questions at all, big or small, please feel free to ask us.
                    </p>

                    <div className="space-y-5 pt-10">
                        <Button className="max-w-[256px] w-full h-[54px] rounded-[4px] uppercase text-[14px] md:text-[18px] font-[600] ">get in touch</Button>

                        <Button className="max-w-[327px] w-full h-[54px] rounded-[4px] uppercase text-[14px] md:text-[18px] font-[600] bg-[#D7D7D7] text-[#000] ">schedule appointment</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}