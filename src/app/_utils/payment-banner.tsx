import Image from "next/image"


export default function PaymentBanner() {
    return (
        <div className="relative py-[40px] md:py-[80px] container">
            <Image className="w-full h-full object-contain" src="/payment-banner.jpg" alt="Payment Banner"  width={1000} height={1000} />
        </div>
    )




}

