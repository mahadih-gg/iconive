import MyProfile from "../_utils/my-profile";
import OrderHistory from "../_utils/order-history";
import Orders from "../_utils/orders";
import RefundReturn from "../_utils/refund-return";
import Wishlist from "../_utils/Wishlist";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProfilePage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <>
      {slug === "orders" ? (
        <Orders />
      ) : slug === "my-profile" ? (
        <MyProfile />
      ) : slug === "order-history" ? (
        <OrderHistory />
      ) : slug === "wishlist" ? (
        <Wishlist />
      ) : slug === "refund-and-return" ? (
        <RefundReturn />
      ) : null}
    </>
  );
}
