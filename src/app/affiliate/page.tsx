import Other__Hero from "@/components/common/Other__Hero";
import Link from "next/link";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { AffiliateOffer, GirlsHairIcon, StyleCuponIcon, StyleGiftIcon, StyleReferIcon, StyleStarIcon } from "@/components/Icons";
import { Button } from "@/components/ui/button";


const raleway = Raleway({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const benefits = [
    {
        icon: <GirlsHairIcon />,
        title: "Exclusive coupon code to share with your followers and earn reward"
    },
    {
        icon: <GirlsHairIcon />,
        title: "5% - 10% commission for every qualified sale* made via your referral link or code",
        subTitle: "*Qualified sale = a sale that was not returned or fraudulently purchased, and that was purchased with a processed valid payment"
    },

]

const stylistBenefits = [
    {
        icon: <StyleGiftIcon className="md:w-[80px] md:h-[80px] w-[40px] h-[40px]" />,
        title: "Chance to get free hair samples"
    },
    {
        icon: <StyleCuponIcon className="md:w-[80px] md:h-[80px] w-[40px] h-[40px]" />,
        title: "Exclusive coupon code"
    },

    {
        icon: <StyleStarIcon className="md:w-[80px] md:h-[80px] w-[40px] h-[40px]" />,
        title: "Get featured on Iconive website and social media"
    },

    {
        icon: <StyleReferIcon className="md:w-[80px] md:h-[80px] w-[40px] h-[40px]" />,
        title: "Get paid to refer clients by earning commission on purchases made with your affiliate link or exclusive coupon code."
    },

]


export default function Affiliate() {
    return (


        <main className="">
            <Other__Hero title="" image="/images/affiliate-bg.jpg" />

            <div className="container  md:py-[80px] py-[40px]">
                <h2 className={`${raleway.className} md:text-[45px] text-[32px] font-semibold `}>Iconive Affiliate Programs</h2>
                <p className="text-base md:text-lg font-normal">

                    Calling all hair lovers! If you are an influencer, a hairstylist, a makeup artist or a beauty & fashion content creator on social media, the Iconive Affiliate Program might be for you! This program is completely free to join. We strive to help our affiliates grow with us, so you can create revenue or save money by sharing what Iconive has to offer with others.
                </p>

                <div className="space-y-3  md:pt-10 pt-5">
                    <h2 className={`${raleway.className} md:text-[35px] text-[28px] font-semibold `}>Select a Program:</h2>
                    <div className="flex items-center flex-wrap gap-6">
                        <Link className="shadow-md bg-[#E8E8E8] hover:bg-primary transition-all duration-300 text-black text-base md:text-lg font-semibold rounded-[4px] px-5 py-4 w-full md:w-auto text-center" href="/affiliate/iconive-affiliate-program">
                            FOR EVERYBODY
                        </Link>

                        <Link className="shadow-md bg-[#E8E8E8] hover:bg-primary transition-all duration-300 text-black text-base md:text-lg font-semibold rounded-[4px] px-5 py-4 w-full md:w-auto text-center" href="/affiliate/iconive-affiliate-program">
                            FOR HAIR STYLISTS
                        </Link>

                        <Link className="shadow-md bg-[#E8E8E8] hover:bg-primary transition-all duration-300 text-black text-base md:text-lg font-semibold rounded-[4px] px-5 py-4 w-full md:w-auto text-center" href="/affiliate/iconive-affiliate-program">
                            FOR HAIR STYLISTS
                        </Link>
                    </div>
                </div>
            </div>

            <div className="bg-[#F9F5F0] py-10">
                <div className="container flex md:flex-row flex-col justify-between items-center gap-6">
                    <div className="space-y-8 md:space-y-16" >
                        <div>
                            <h2 className={`${raleway.className} md:text-[45px] text-[32px] font-semibold `}>Referral Program:</h2>
                            <p className="text-base md:text-lg font-normal">
                                Get up to 20% off on your next order by successfully referring three friends!
                            </p>

                        </div>
                        <AffiliateOffer className="md:w-[390px] w-full h-[168px] " />

                        <Button className="shadow-none bg-[#E8E8E8] hover:bg-primary transition-all duration-300 text-black text-base md:text-lg font-semibold rounded-[4px] px-5 py-4 max-w-full md:max-w-[327px] h-[60px] w-full ">
                            JOIN NOW
                        </Button>
                    </div>


                    <div className="flex items-center gap-6">
                        <Image className=" object-contain" src="/images/AFFILIATE 1.jpg" alt="affiliate" width={500} height={500} />
                    </div>


                </div>
            </div>

            <div className="container py-[40px] md:py-[80px]">
                <Image className=" object-contain" src="/images/Influencer Platforms-banner.jpg" alt="affiliate" width={2000} height={1000} />
            </div>

            <div className="container py-[40px] md:py-[80px]">
                <h2 className={`${raleway.className} md:text-[45px] text-[32px] font-semibold `}>Influencer Affiliate Program:</h2>
                <p className="text-base md:text-lg font-normal">
                    Your opinions matter to us at New Times Hair. We value your personal reviews, videos, photos, and blogs, as they provide valuable insight and encouragement to others interested in transforming their lives. Share your experiences and help others make informed decisions.
                </p>
            </div>

            <div className="container py-[40px] md:py-[80px]  md:space-y-20 space-y-10">
                <ul className="space-y-4">
                    <li className={`${raleway.className} md:text-[35px] text-[28px] font-semibold pb-3`}>Benefits:</li>
                    {
                        benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center gap-4">


                                <div className="md:w-[60px] md:h-[60px] w-[40px] h-[40px] bg-[#f9f5f0] rounded-full flex items-center justify-center">
                                    <GirlsHairIcon className="md:w-[40px] md:h-[40px] w-[20px] h-[20px]" />
                                </div>
                                <div className="text-base md:text-lg font-normal">
                                    <p>{benefit.title}</p>
                                    <p className="text-[#B8662A]">{benefit.subTitle}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <ul className="space-y-4">
                    <li className={`${raleway.className} md:text-[35px] text-[28px] font-semibold pb-3`}>Ideally You Will Be:</li>
                    {
                        benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center gap-4">
                                <div className="md:w-[60px] md:h-[60px] w-[40px] h-[40px] bg-[#f9f5f0] rounded-full flex items-center justify-center">
                                    <GirlsHairIcon className="md:w-[40px] md:h-[40px] w-[20px] h-[20px]" />
                                </div>
                                <div className="text-base md:text-lg font-normal">
                                    <p>{benefit.title}</p>
                                    <p className="text-[#B8662A]">{benefit.subTitle}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>


                <Button type="button" className=" cursor-pointer mt-5 shadow-none bg-primary hover:bg-primary transition-all duration-300 text-white text-base md:text-lg font-semibold rounded-[4px] px-5 py-4 max-w-full md:max-w-[327px] h-[60px] w-full uppercase ">
                    JOIN as influencer
                </Button>
            </div>

            {/* Stylist-bg.jpg */}
            
            <div className="container py-[40px] md:py-[80px]">
                <Image className=" object-contain" src="/images/Stylist-bg.jpg" alt="Stylist-bg.jpg" width={2000} height={1000} />
            </div>

            <div className="container py-[40px] md:py-[80px]">
                <h2 className={`${raleway.className} md:text-[45px] text-[26px] font-semibold `}>Join Iconive Stylist Program</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-10">
                    {
                        stylistBenefits.map((benefit, index) => (
                            <div key={index} className="flex items-center flex-col gap-4 text-center">
                                <div className="md:w-[123px] md:h-[123px] w-[80px] h-[80px] bg-[#f9f5f0] rounded-full flex items-center justify-center">
                                    {benefit.icon}
                                </div>

                                <p className="text-base md:text-lg font-normal">{benefit.title}</p>
                            </div>

                        ))

                    }
                </div>

            </div>

        </main>
    )

}
