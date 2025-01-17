import Heading from "@/components/common/Heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WholesalePriceIcon } from "@/components/Icons";
import { Raleway } from "next/font/google";

const raleway = Raleway({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
})

export const whatYouGetData = [
    {
        title: "Wholesaler and Distributor",
        value: "wholesaler",
        details: [
            {
                icon: <WholesalePriceIcon className="md:w-[57px] md:h-[57px] w-[40px] h-[40px]" />,
                title: "Extremely Competitive SVIP Wholesale Price",
                description: "Iconive Hair provides special discounted pricing on hair systems for clients who place bulk orders. By taking advantage of our competitive wholesale prices, you can ensure that your service remains competitive in the market while enjoying the advantages of increased revenue."
            },
            {
                icon: <WholesalePriceIcon className="md:w-[57px] md:h-[57px] w-[40px] h-[40px]" />,
                title: "Special Discount for Sample Orders",
                description: "Iconive Hair extends a generous discount for your initial sample order, even if you choose to order just one piece. We believe in giving you the opportunity to experience the quality of our hair systems at a minimal cost and with zero risk to you."
            },
            {
                icon: <WholesalePriceIcon className="md:w-[57px] md:h-[57px] w-[40px] h-[40px]" />,
                title: "Special Discount for Sample Orders",
                description: "Iconive Hair extends a generous discount for your initial sample order, even if you choose to order just one piece. We believe in giving you the opportunity to experience the quality of our hair systems at a minimal cost and with zero risk to you."
            },
            {
                icon: <WholesalePriceIcon className="md:w-[57px] md:h-[57px] w-[40px] h-[40px]" />,
                title: "Special Discount for Sample Orders",
                description: "Iconive Hair extends a generous discount for your initial sample order, even if you choose to order just one piece. We believe in giving you the opportunity to experience the quality of our hair systems at a minimal cost and with zero risk to you."
            },
        ]
    },
    {
        title: "Online Retailer",
        value: "online",
        details: [
            {
                icon: <WholesalePriceIcon className="md:w-[57px] md:h-[57px] w-[40px] h-[40px]" />,
                title: "Special Discount for Sample Orders",
                description: "Iconive provides an exclusive discount for your initial sample order, even if you decide to purchase just one piece. This allows you to experience the quality of our hair systems firsthand, with minimal cost and no significant commitment required."
            },
            {
                icon: <WholesalePriceIcon className="md:w-[57px] md:h-[57px] w-[40px] h-[40px]" />,
                title: "Drop Shipping Service",
                description: "We offer a global drop shipping service, enabling you to efficiently grow your business. With worldwide shipping directly to your customers, you can eliminate the need for upfront capital investment, inventory management, and shipping hassles. Focus on business growth while we handle the logistics for you."
            },
            {
                icon: <WholesalePriceIcon className="md:w-[57px] md:h-[57px] w-[40px] h-[40px]" />,
                title: "Large Amount of Stock Available",
                description: "Our quality inspection system ensures unwavering quality at every stage of production. By offering our products to your customers, you can enhance your brand's reputation and foster business growth. Rest assured that our commitment to consistent quality will contribute to your success in the market."
            },
            {
                icon: <WholesalePriceIcon className="md:w-[57px] md:h-[57px] w-[40px] h-[40px]" />,
                title: "OEM/ODM",
                description: "Our high production capacity allows us to produce up to 150,000 hair systems annually. Combined with our advanced supply chain system, we can efficiently meet the demands of our clients and ensure a steady supply of top-quality products."
            },
            {
                icon: <WholesalePriceIcon className="md:w-[57px] md:h-[57px] w-[40px] h-[40px]" />,
                title: "30-Day Free Return Policy",
                description: "At Iconive, we provide a complimentary 30-day return policy. Whether you're a first-time international buyer or an experienced customer, you can take advantage of this offer. The only expense you'll incur is the shipping fee to experience our exceptional hair systems. We believe in offering a risk-free opportunity for you to try our products and ensure your satisfaction."
            },
            {
                icon: <WholesalePriceIcon className="md:w-[57px] md:h-[57px] w-[40px] h-[40px]" />,
                title: "Fast delivery within 3-5 days",
                description: "We collaborate with renowned international couriers like FedEx and DHL for fast delivery. Regardless of your location, expect your order to arrive within 3-5 business days."
            },
            {
                icon: <WholesalePriceIcon className="md:w-[57px] md:h-[57px] w-[40px] h-[40px]" />,
                title: "24/7 Highly Specialized Client Service Team",
                description: "At New Times Hair, our dedicated client service team is available 24/7 to assist you with any inquiries or concerns. You can rely on our knowledgeable team to provide prompt assistance whenever you need it."
            },
            {
                icon: <WholesalePriceIcon className="md:w-[57px] md:h-[57px] w-[40px] h-[40px]" />,
                title: "Easy and Quick Online Purchase",
                description: "Ordering on our website is easy and fast. We offer various payment options, and you can track your order for delivery updates. Stay updated on your delivery dates using our order tracking system, allowing you to easily monitor the status of your order at any time."
            }
        ]
    },
    {
        title: "Hair Stylist or Salon Owner",
        value: "hair",
        details: [
            {
                icon: <WholesalePriceIcon className="md:w-[57px] md:h-[57px] w-[40px] h-[40px]" />,
                title: "Extremely Competitive SVIP Wholesale Price",
                description: "Iconive Hair provides special discounted pricing on hair systems for clients who place bulk orders. By taking advantage of our competitive wholesale prices, you can ensure that your service remains competitive in the market while enjoying the advantages of increased revenue."
            },
            {
                icon: <WholesalePriceIcon className="md:w-[57px] md:h-[57px] w-[40px] h-[40px]" />,
                title: "Special Discount for Sample Orders",
                description: "Iconive Hair extends a generous discount for your initial sample order, even if you choose to order just one piece. We believe in giving you the opportunity to experience the quality of our hair systems at a minimal cost and with zero risk to you."
            },
            {
                icon: <WholesalePriceIcon className="md:w-[57px] md:h-[57px] w-[40px] h-[40px]" />,
                title: "Special Discount for Sample Orders",
                description: "Iconive Hair extends a generous discount for your initial sample order, even if you choose to order just one piece. We believe in giving you the opportunity to experience the quality of our hair systems at a minimal cost and with zero risk to you."
            },
            {
                icon: <WholesalePriceIcon className="md:w-[57px] md:h-[57px] w-[40px] h-[40px]" />,
                title: "Special Discount for Sample Orders",
                description: "Iconive Hair extends a generous discount for your initial sample order, even if you choose to order just one piece. We believe in giving you the opportunity to experience the quality of our hair systems at a minimal cost and with zero risk to you."
            },
        ]
    }
]

export default function Wholesale__Info() {
    return (
        <div className="container md:py-[80px] py-[40px]">
            <Heading title="Are you a..." />

            <Tabs defaultValue="wholesaler" className=" pt-[40px]">
                <TabsList className="grid w-full md:grid-cols-3 grid-cols-1 gap-3 bg-white max-w-[900px] mx-auto ">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {whatYouGetData.map((item: any, index: number) => (
                        <TabsTrigger className="text-[#383838] md:text-[18px] text-[16px] font-[500] shadow-none " key={index} value={item.value}>{item.title}</TabsTrigger>
                    ))}
                </TabsList>
                <TabsContent value="wholesaler" className="pt-[100px] md:pt-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 border border-[#C5C5C5] px-[30px] py-10">
                        {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            whatYouGetData[0]?.details?.map((item: any, index: number) => (
                                <div key={index} className="flex flex-col items-center gap-2">
                                    <div className="md:w-[88px] md:h-[88px] w-[60px] h-[60px] bg-[#F9F5F0] rounded-full flex items-center justify-center">
                                        {item?.icon}
                                    </div>
                                    <h3 className={`${raleway.className} text-[#000] md:text-[18px] text-[16px] font-[500] text-center md:pt-5 pt-3`}>{item.title}</h3>
                                    <p className="text-[#383838] md:text-[16px] text-[14px] leading-[24px] md:leading-[32px] font-[400] text-justify">{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </TabsContent>
                <TabsContent value="online" className="pt-[100px] md:pt-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 border border-[#C5C5C5] px-[30px] py-10">
                        {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            whatYouGetData[1]?.details?.map((item: any, index: number) => (
                                <div key={index} className="flex flex-col items-center gap-2">
                                    <div className="md:w-[88px] md:h-[88px] w-[60px] h-[60px] bg-[#F9F5F0] rounded-full flex items-center justify-center">
                                        {item?.icon}
                                    </div>
                                    <h3 className={`${raleway.className} text-[#000] md:text-[18px] text-[16px] font-[500] text-center md:pt-5 pt-3`}>{item.title}</h3>
                                    <p className="text-[#383838] md:text-[16px] text-[14px] leading-[24px] md:leading-[32px] font-[400] text-justify">{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </TabsContent>
                <TabsContent value="hair" className="pt-[100px] md:pt-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 border border-[#C5C5C5] px-[30px] py-10">
                        {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            whatYouGetData[2]?.details?.map((item: any, index: number) => (
                                <div key={index} className="flex flex-col items-center gap-2">
                                    <div className="md:w-[88px] md:h-[88px] w-[60px] h-[60px] bg-[#F9F5F0] rounded-full flex items-center justify-center">
                                        {item?.icon}
                                    </div>
                                    <h3 className={`${raleway.className} text-[#000] md:text-[18px] text-[16px] font-[500] text-center md:pt-5 pt-3`}>{item.title}</h3>
                                    <p className="text-[#383838] md:text-[16px] text-[14px] leading-[24px] md:leading-[32px] font-[400] text-justify">{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}