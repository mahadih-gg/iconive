import ProductDetails from "../_utils/product-details"
import ProductSection from "../_utils/product__section"


export default function ProductPage() {
  return (
    <main className="container mx-auto px-0 md:px-4 py-8">
        <ProductSection />
        <ProductDetails />
    </main>
  )
}
