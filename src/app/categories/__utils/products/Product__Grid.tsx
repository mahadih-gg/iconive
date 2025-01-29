import Product from "@/components/common/product";
import { products } from "@/lib/data";

export default function Product__Grid() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
                <Product product={product} key={product.id} />
            ))}
        </div>
    )
}