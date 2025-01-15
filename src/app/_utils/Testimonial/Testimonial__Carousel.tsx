'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { StarIcon } from "@/components/Icons"
import { Raleway } from "next/font/google"  
import { useState, useEffect } from "react"
const raleway = Raleway({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Testimonial__Carousel( {data}: {data: any} ) 
{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [api, setApi] = useState<any>(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (!api) return

        api.on('select', () => {
            setCurrentIndex(api.selectedScrollSnap())
        })
    }, [api])

    return (
        <Carousel
            className="w-full"
            setApi={setApi}
        >
            <CarouselContent>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {data?.map((item: any, index: number) => (
                    <CarouselItem key={index}>
                        <div className="text-center py-10">
                            <h3 className={`text-[26px] font-[400] italic ${raleway.className}`}>{item?.description}</h3>
                            <p className={`text-[21px] font-[400] text-[#666666] pt-2 ${raleway.className}`}>-{item?.name}</p>
                            <div className="flex justify-center items-center gap-2 pt-5">
                                {
                                    Array.from({ length: 5 }).map((_, index) => (
                                        <StarIcon key={index} className={`${index < item?.rating ? 'text-[#DEBC0A]' : 'text-[#BABABA]'}`} />
                                    ))
                                }
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div onClick={() => api?.prev()}><CarouselPrevious /></div>
            <div onClick={() => api?.next()}><CarouselNext /></div>

            <div className="flex justify-center gap-2 mt-8">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {data.map((_: any, index: number) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                            currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </Carousel>
    )
}
