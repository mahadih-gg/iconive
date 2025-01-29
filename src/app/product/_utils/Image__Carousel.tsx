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
        <div className="w-full max-w-full ">
            <div className="overflow-hidden mb-[0px] relative " ref={mainViewRef}>
                <div className="flex ">
                    {images?.map((src, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-full relative ">
                            <div className='w-full flex justify-center items-center'>
                                <Image
                                    src={src}
                                    alt={`Product Image ${index + 1}`}
                                    width={600}
                                    height={400}
                                    className=" object-contain "
                                />
                            </div>
                            {/* <div className="flex justify-between absolute top-0 left-0 w-full">
                                
                                <button className={` z-10 ${'text-[16px] md:text-[18px] h-[48px] md:h-[55px]'} font-semibold px-5 backdrop-blur-md group-hover:bg-white/20 bg-white/60`}>$10.00 USD</button>

                                <div className="z-10 py-[15px] w-[42px] md:w-[52px] backdrop-blur-md group-hover:bg-white/20 bg-white/60 flex justify-center flex-col items-center">
                                    <button className="mb-[20px]">
                                        <GitCompareArrows className="md:w-[24px] md:h-[24px] w-[20px] h-[20px]" />
                                    </button>
                                </div>
                            </div> */}
                        </div>
                    ))}
                </div>
                <div className='absolute top-5 right-5 flex justify-center items-center'>
                        <div className='flex flex-col items-center justify-center w-[90px] h-[90px] bg-[#212529] backdrop-blur-md rounded-full text-white'>
                            <span className='text-[22px] font-semibold'>20%</span>
                            <span className='text-[20px] font-semibold'>Off</span>
                        </div>
                </div>
            </div>

            <div className="overflow-hidden " ref={thumbViewRef}>
                <div className="flex space-x-[10px] py-2">
                    {images?.map((_, index) => (
                        <Button
                            key={index}
                            variant="ghost"
                            className={`p-0 rounded-none flex-[0_0_auto] w-[156px] h-[138px] ${selectedIndex === index ? 'ring-2 ring-primary' : ''
                                }`}
                            onClick={() => onThumbClick(index)}
                        >
                            <Image
                                src={images[index]}
                                alt={`Go to slide ${index + 1}`}
                                width={100}
                                height={100}
                                className="w-full h-full object-cover"
                            />
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}