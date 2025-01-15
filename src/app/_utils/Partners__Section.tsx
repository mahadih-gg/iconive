import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"


const partners = [
    {
        name: "pay station",
        image: "/images/partners/pay.svg",
    },
    {
        name: "bkash",
        image: "/images/partners/bkash.svg",
    },
    {
        name: "roket",
        image: "/images/partners/nagad.svg",
    },
    {
        name: "ups",
        image: "/images/partners/ups.svg",
    },
    {
        name: "dhl",
        image: "/images/partners/dhl.svg",
    },
    {
        name: "fedex",
        image: "/images/partners/fedx.svg",
    },
]

export default function Partners__Section() {
    return (
        <div className="container pb-[40px] lg:pb-[80px]" >
            <Carousel
                opts={{
                    align: "center",
                }}
                className="w-full"
            >
                <CarouselContent>
                    {partners.map((partner, index) => (
                        <CarouselItem key={index} className="  basis-1/3  md:basis-1/4 lg:basis-1/6">
                            <div className="flex items-center justify-center h-[80px] w-full p-4">
                                <Image 
                                    className="object-contain w-full h-full" 
                                    src={partner.image} 
                                    alt={partner.name} 
                                    width={80} 
                                    height={80}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%'
                                    }}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
            </Carousel>
        </div>
    )
}
