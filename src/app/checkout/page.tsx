import Other__Hero from "@/components/common/Other__Hero";
import Checkout__Form from "./_utils/checkout-form";
export default function Checkout() {
  return (
    <main>
        <Other__Hero page="checkout" title="Checkout" image="/images/checkout-banner.jpg" />
        <Checkout__Form />
    </main>
  )
}
