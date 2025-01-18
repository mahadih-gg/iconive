import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ['latin'], weight: ['400', '500', '700'] })

export default function Quote__Section() {
    return (
        <div className="bg-[#F9F5F0] py-[40px] md:py-[80px] ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[70px] container items-center">
                <div className="Image__Container">
                    <Image src="/images/coloredWigs.jpg" alt="quote" width={585} height={781} className="w-full object-cover" />
                </div>
                <div className="info__container">
                    <h2 className={`${raleway.className} text-[28px] md:text-[45px] font-[500] pb-[30px] md:pb-[60px]`}>Colouring Your Wig</h2>
                    <p className="text-[16px] md:text-[20px] font-[400] text-[#000] pb-5">
                        Once we’ve achieved the ideal colour for your wig as part of our bespoke LC Wigs process, colour maintenance is recommended over the lifetime of your wig.
                    </p>
                    <p className="text-[16px] md:text-[20px] font-[400] text-[#000]">
                        Just like with your bio hair, colour naturally fades or loses tone with regular use and sun exposure. We’re here when you need us to take the colour right back to its original state, or make any necessary repairs.
                    </p>

                    <div className="Quote__Container pt-[40px] md:pt-[60px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="70"
                            height="53"
                            fill="none"
                            viewBox="0 0 70 53"
                        >
                            <path
                                fill="#E7C295"
                                d="M21.875 8.833 26.25 0H17.5C7.831 0 0 12.323 0 22.083V53h30.625V22.083h-17.5c0-13.25 8.75-13.25 8.75-13.25M52.5 22.083c0-13.25 8.75-13.25 8.75-13.25L65.625 0h-8.75c-9.669 0-17.5 12.323-17.5 22.083V53H70V22.083z"
                            ></path>
                        </svg>
                        <blockquote className="text-[18px] md:text-[24px] font-[500] text-[#996B32] italic pt-5 ">
                            I can’t tell you how much I love my colour, thank you!
                        </blockquote>
                        <p className="text-[16px] md:text-[20px] font-[400] text-[#000] pt-2">
                            - Stacy, client of Iconive Hair Wigs
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}