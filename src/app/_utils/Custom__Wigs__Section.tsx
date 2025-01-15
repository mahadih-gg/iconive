import View__Button from "@/components/common/View__Button"
import Image from "next/image"
import { Raleway } from "next/font/google"
const raleway = Raleway({ subsets: ['latin'], weight: ['500', '600', '700', '800', '900'] })
const customWigs = [
    {
        image: "/images/custom/custom-1.jpg",
        title: "Custom Wigs",
    },
    {
        image: "/images/custom/custom-2.jpg",
        title: "Custom Wigs",
    },
    {
        image: "/images/custom/custom-3.jpg",
        title: "Custom Wigs",
    },
    {
        image: "/images/custom/custom-4.jpg",
        title: "Custom Wigs",
    },
    {
        image: "/images/custom/custom-5.jpg",
        title: "Custom Wigs",
    },
    {
        image: "/images/custom/custom-6.jpg",
        title: "Custom Wigs",
    },
]
export default function Custom__Wigs__Section() {
    return (
        <div className=" bg-[#F5F4F4] py-[40px] lg:py-[80px] px-0  md:px-[100px] ">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 container">
                <div className="text-center md:hidden block">
                    <h3 className={`${raleway.className} text-[26px] font-[600] uppercase pb-5`}>Custom medical wigs</h3>
                    <p className={`text-[14px] font-[400] text-[#666666] pb-[30px]`}>
                        Our custom wigs cater to medical hair loss needs. Choose base type, hair color, and length for a personalized fit. High-quality materials ensure comfort and durability, and a fashionable look. Ideal for chemotherapy or alopecia patients.
                    </p>
                </div>
                <div className="image-container columns-2 gap-4 col-span-1">
                    {customWigs.map((customWig, index) => (
                        <div className="image__item" key={index}>
                            <Image className="object-contain" src={customWig.image} alt={customWig.title} width={600} height={600} />
                        </div>
                    ))}

                </div>
                <div className="text-right hidden  md:flex flex-col  items-end justify-center col-span-2 ">
                    <h3 className={`${raleway.className} text-[35px] font-[500] uppercase pb-5`}>Custom medical wigs</h3>
                    <p className={`text-lg font-[400] leading-[37px] max-w-[500px] text-[#666666] pb-[30px]`}>
                        Our custom wigs cater to medical hair loss needs. Choose base type, hair color, and length for a personalized fit. High-quality materials ensure comfort and durability, and a fashionable look. Ideal for chemotherapy or alopecia patients.
                    </p>
                    <View__Button iconClass="text-black w-[24px] h-[24px]" href="/custom-wigs" label="View custom medical Systems" />
                </div>
            </div>
        </div>
    )
}
