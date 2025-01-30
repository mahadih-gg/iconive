import MyProfile from "../_utils/my-profile";
import Orders from "../_utils/orders";

export default function ProfilePage({ params: { slug } }: { params: { slug: string } }) {

  return (
    slug === "orders" ? <Orders /> : slug === "my-profile" ? <MyProfile /> : <div>Profile</div>
  )
}
