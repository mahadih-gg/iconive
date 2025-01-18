import Other__Hero from "@/components/common/Other__Hero";
import { Button } from "@/components/ui/button";
import { Raleway } from "next/font/google";
import Quote__Section from "./_utils/Quote__Section";
import Question__Section from "./_utils/Question__Section";
const raleway = Raleway({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

const steps = [
    {
        title: "Adding Hair to a Skin Top Wig",
        description: "Adding hair to a skin top wig can bring your wig back to life, and often looking almost brand new! We do this by adding each hair with utmost precision. This service is available for wigs made by LC Wigs as well as wigs purchased externally."
    },
    {
        title: "Adding Hair to a Lace Top Wig",
        description: "Adding hair to a lace top wig is a practiced skill and must to be done carefully to maximise the most natural look. The complexity and time required is largely dependant on the condition of the lace and the area that needs to be filled. We recommend that you bring your wig in for repair as soon as you begin to notice the lace balding, before the area to fill in becomes too large."
    },
    {
        title: "Lace Wig Repair",
        description: "The repair of ripped lace is assessed on a case-by-case basis. The possibility of repair depends on the placement of the rip. We will advise you if the lace can be repaired or if it is best to invest in a new lace piece. This service is only available for wigs made by LC Wigs."
    },
    {
        title: "Resizing or Amending Cap",
        description: "Few people are trained in resizing a wig in a seamless manner for the most natural look and fit. This is a skill we have been professionally trained in and take much pride in offering to customers of LC Wigs."
    },
    
]

export default function RepairPage() {
    return (
        <main className="">
            <Other__Hero title="SERVICE & REPAIR" image="/images/repiar.jpg" />
            <div className="bg-[#F9F5F0] py-[40px] md:py-[80px]">
                <div className="max-w-[1080px] mx-auto px-5 md:px-0 flex flex-col items-center justify-center text-center">
                    <h2 className={`${raleway.className} text-[28px] md:text-[45px] font-[500] pb-[60px]`}>We made your wig, so we know exactly how to get it feeling just right once again.</h2>
                    <p className="text-[16px] md:text-[20px] font-[400] text-[#000]">
                        One of the perks of providing an end-to-end wig repair service here in Melbourne, is that we have the expertise to make any adjustments and repairs needed – on-site, without delay. You can kiss interstate/international wig services goodbye!
                    </p>
                    <p className="text-[16px] md:text-[20px] font-[400] text-[#000] pt-[30px] pb-[60px]">
                    At LC Wigs, we’re here to listen and correct any issues you are experiencing ASAP so that you can go back to feeling beautiful and confident in your wig.
                    </p>

                    <Button className="max-w-[340px] w-full h-[54px] rounded-[11px] uppercase text-[14px] md:text-[18px] font-[700] ">Schedule wig repair</Button>
                </div>
            </div>

            <div className="max-w-[1080px] mx-auto px-5 md:px-0 py-[40px] md:py-[80px]">
                {
                    steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center justify-center text-center py-[40px]">
                            <h4 className="text-[16px] md:text-[20px] font-[400] text-[#878787]">0{index + 1}</h4>
                            <h2 className={`${raleway.className} text-[28px] md:text-[45px] font-[500] uppercase text-[#000] pb-5 pt-[10px]`}>{step.title}</h2>
                            <p className="text-[16px] md:text-[20px] font-[400] text-[#000]">{step.description}</p>
                        </div>
                    ))
                }
            </div>

            <Quote__Section />  
            <Question__Section />       

        </main>
    )
}   