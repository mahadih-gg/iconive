import Heading from "@/components/common/Heading";
import Product from "@/components/common/product";
import View__Button from "@/components/common/View__Button";
import { products } from "@/lib/data";

const New__Arrivals__Products = () => {
    return (
        <div className="container py-[40px] md:py-[80px]">
            <Heading isSubMbHide={true} title="New Arrivals" subTitle="Unlock the latest hair trends: Step up your style game with our top picks of trending wigs" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-[20px] md:pt-[60px]">
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

export default New__Arrivals__Products;