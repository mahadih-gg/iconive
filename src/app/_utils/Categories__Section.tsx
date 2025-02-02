import Image from "next/image";
import { Raleway } from "next/font/google";
import Link from "next/link";
import Heading from "@/components/common/Heading";

const categories = [
    {
        title: "For Him",
        subTitle: "gents",
        text: 'Be confident with any style you like to own from a large variety of styles.',
        link: "/categories/for-him",
        images: '/images/him.jpg'
    },
    {
        title: "For Her",
        subTitle: "ladies",
        text: 'Explore yourself, be the glamourous persona you always dreamed of.',
        link: "/categories/for-her",
        images: '/images/her.jpg'
    },
];

const raleway = Raleway({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

const Categories__Section = () => {
    return (
        <div className="py-[60px] md:py-[80px] px-0 md:px-[100px]">
            <Heading title="SHOP BY CATEGORY" className="pb-5 md:hidden block !font-[600]" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {
                    categories?.map((category, index) => (
                        <div key={index} className="flex flex-col items-center justify-center">
                            <div className="relative cursor-pointer group">
                                <Image src={category.images} alt={category.title} width={600} height={600} className="object-contain" />



                                {/* Title */}
                                <div className="z-10 absolute bottom-0 left-0 w-full h-full flex flex-col items-center justify-center">
                                    <h3 className={`text-[33px] font-[300] text-white`}>{category.title}</h3>
                                </div>

                                {/* view shop button */}
                                <div className="z-10 absolute bottom-[10%] left-0 w-full flex flex-col items-center justify-center">
                                    <Link href={category.link} className=" tracking-wide text-white text-base font-[400] underline block  underline-offset-[6px]">
                                        View Shop
                                    </Link>
                                </div>
                                {/* liner gradient bottom to top */}
                                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#00000082] group-hover:to-[#000000ad] transition-all duration-500"></div>
                            </div>
                            <div className="w-full h-full text-center p-4 md:block hidden">
                                <h3 className={` text-[35px] font-[500] uppercase  ${raleway.className}`}>{category.subTitle}</h3>
                                <p className=" text-lg font-[400] max-w-[400px] mx-auto text-[#999]">{category.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Categories__Section;