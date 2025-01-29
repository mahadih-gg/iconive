'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from "@/components/ui/button"

export default function ProductCarousel() {
    const [mainViewRef, mainEmblaApi] = useEmblaCarousel()
    const [thumbViewRef, thumbEmblaApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true,
    })
    const [selectedIndex, setSelectedIndex] = useState(0)

    const images = [
        '/images/products/image 4.jpg?height=400&width=400',
        '/images/products/image 4.jpg?height=400&width=400',
        '/images/products/image 4.jpg?height=400&width=400',
        '/images/products/image 4.jpg?height=400&width=400',
        '/images/products/image 4.jpg?height=400&width=400',
    ]

    const onThumbClick = useCallback(
        (index: number) => {
            if (!mainEmblaApi || !thumbEmblaApi) return
            mainEmblaApi.scrollTo(index)
        },
        [mainEmblaApi, thumbEmblaApi]
    )

    const onSelect = useCallback(() => {
        if (!mainEmblaApi || !thumbEmblaApi) return
        setSelectedIndex(mainEmblaApi.selectedScrollSnap())
        thumbEmblaApi.scrollTo(mainEmblaApi.selectedScrollSnap())
    }, [mainEmblaApi, thumbEmblaApi])

    useEffect(() => {
        if (!mainEmblaApi) return
        onSelect()
        mainEmblaApi.on('select', onSelect)
        return () => {
            mainEmblaApi.off('select', onSelect)
        }
    }, [mainEmblaApi, onSelect])

    return (
        <div className="w-full">
            <div className="overflow-hidden mb-[0px] relative " ref={mainViewRef}>
                <div className="flex gap-4">
                    {images?.map((src, index) => (
                        <div key={index} className="flex-[0_0_100%] relative ">
                            <div className="relative w-full pb-[100%]">
                                <Image
                                    src={src}
                                    alt={`Product Image ${index + 1}`}
                                    fill
                                    className="object-cover absolute inset-0"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className='absolute top-5 right-5 flex justify-center items-center'>
                    <div className='flex flex-col items-center justify-center w-[70px] h-[70px] md:w-[90px] md:h-[90px] bg-[#212529] backdrop-blur-md rounded-full text-white'>
                        <span className='text-[16px] md:text-[22px] font-semibold'>20%</span>
                        <span className='text-[14px] md:text-[20px] font-semibold'>Off</span>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden  md:pt-[10px]" ref={thumbViewRef}>
                <div className="flex space-x-[10px] py-2">
                    {images?.map((_, index) => (
                        <Button
                            key={index}
                            variant="ghost"
                            className={`p-0 rounded-none flex-none w-[calc((60%-20px)/2)] sm:w-[calc((100%-20px)/3)] h-auto aspect-square  md:w-[156px] md:h-[138px] `}
                            onClick={() => onThumbClick(index)}
                        >
                            <div className="relative w-full pb-[100%]">
                                <Image
                                    src={images[index]}
                                    alt={`Go to slide ${index + 1}`}
                                    fill
                                    className={`object-contain absolute inset-0 ${
                                        selectedIndex === index ? 'ring-2 ring-primary' : ''
                                    }`}
                                />
                            </div>
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}