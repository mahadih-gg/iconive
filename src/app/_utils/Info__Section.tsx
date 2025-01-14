import { ReturnIcon, SecureIcon, ShippingTruck, SupportIcon } from "@/components/Icons"

const data = [
    {
        icon: <ShippingTruck className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]"/>,
        title: "FREE Shipping",
        description: "All payments are done through Paystation.",
        border: true
    },
    {
        icon: <SecureIcon className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"/>,
        title: "Secure Payment",
        description: "All payments are done through Paystation.",
        border: true
    },
    {
        icon: <SupportIcon className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"/>,
        title: "Support 24/7",
        description: "Contact us 24 hours a day, 7 days a week",
        border: true
    },
    {
        icon: <ReturnIcon className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"/>,
        title: "10 Days Return",
        description: "Simply return it within 10 days for and exchange.",
        border: false
    },
]

// 


const InfoSection = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-[40px] md:py-[80px] container">
        {data.map((item, index) => (    
            <div className={`flex md:flex-row flex-col  items-center md:items-start gap-2 md:gap-4 ${item.border ? "border-none md:border-r-2 border-[#999999]" : ""}`} key={index}>
                <div className="Icon_wrapper">
                    {item.icon}
                </div>
                <div className="text_wrapper text-center md:text-left">
                    <h3 className="text-[15px] md:text-lg font-[400]">{item.title}</h3>
                    <p className="text-sm md:text-base font-[400] text-[#666666]">{item.description}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default InfoSection;