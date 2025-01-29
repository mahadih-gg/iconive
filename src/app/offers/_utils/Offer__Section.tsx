import Heading from "@/components/common/Heading";
import Product from "@/components/common/product";
import { products } from "@/lib/data";
import Image from "next/image";

export default function Offer__Section() {
    return (
        <div>
            <div className="container  md:py-[80px] py-[40px]">
                <Heading title="Stock clearance sale" subTitle="Get the perfect Wig at an amazing price that is readily available!" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-[20px] md:pt-[60px]">
                    {products.map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
                </div>
            </div>

            <div className="h-[140px] md:h-[549px] w-full relative ">
                <Image src="/images/offer_promo__banner.jpg" alt="iconive" fill className=" object-contain" />
            </div>

            <div className="container  md:py-[80px] py-[40px]">
                <Heading title="Spring Sale" subTitle="Spot perfectly fitting wigs for spring at a stunning discounted price." />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-[20px] md:pt-[60px]">
                    {products.map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
                </div>
            </div>

        </div>
    )
}