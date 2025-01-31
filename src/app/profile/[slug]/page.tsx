import MyProfile from "../_utils/my-profile";
import Orders from "../_utils/orders";

interface PageProps {
  params: {
    slug: string
  }
}

export default function ProfilePage({ params }: PageProps) {

  return (
    <>
    {params.slug === "orders" ? <Orders /> : params.slug === "my-profile" ? <MyProfile /> : <div>Profile</div>}
    </>
  )
}
