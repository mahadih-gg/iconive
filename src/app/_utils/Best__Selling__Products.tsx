import Heading from "@/components/common/Heading";
import Product from "@/components/common/product";
import View__Button from "@/components/common/View__Button";
import { products } from "@/lib/data";

const Best__Selling__Products = () => {
    return (
        <div className="container py-[40px] md:py-[80px]">
            <Heading isSubMbHide={true} title="our Best Selling wigs" subTitle="Discover your unique look: Browse our selection of wigs for him and her" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-[20px] md:pt-[60px]">
                {products.map((product) => (
                    <Product product={product} key={product.id} />
                ))}
            </div>
            <div className="flex justify-center items-center pt-[40px]">
                <View__Button href="/products" label="View Shop" />
            </div>
        </div>
    )
}

export default Best__Selling__Products;