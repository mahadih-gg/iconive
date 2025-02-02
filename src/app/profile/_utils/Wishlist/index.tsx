import ProfileSidebar from "../profile-sidebar";
import { products } from "@/lib/data";
import Product from "@/components/common/product";

export default function Wishlist() {
    return (
        <ProfileSidebar>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {products.map((product) => (
                    <Product product={product} key={product.id} />
                ))}
            </div>
        </ProfileSidebar>

    )
}
