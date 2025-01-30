import ProfileSidebar from "../profile-sidebar";
import OrderItem from "./order-item";

export default function Orders() {
    return (
        <ProfileSidebar>
            <div className="">
                <OrderItem />
            </div>
        </ProfileSidebar>
    )
}