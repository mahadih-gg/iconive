"use client"
import Breadcrumbs from "@/components/common/Breadcrumb"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, ShoppingBag, History, Heart, RotateCcw } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"


const navigation = [
  { name: "My Profile", icon: User, href: "/profile/my-profile" },
  { name: "Orders", icon: ShoppingBag, href: "/profile/orders", badge: "2" },
  { name: "Order History", icon: History, href: "/profile/order-history" },
  { name: "Wishlist", icon: Heart, href: "/profile/wishlist" },
  { name: "Refund and Return", icon: RotateCcw, href: "/profile/refund-and-return" },
]

export default function ProfileSidebar({ children }: { children: React.ReactNode }) {

  const { slug } = useParams()

  return (
    <>

      <div className="bg-gray-50 p-4 md:p-6">
        <div className=" pb-5"><Breadcrumbs /></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] min-h-[calc(100vh-200px)] gap-6">
            {/* Left Sidebar */}
            <div className="bg-white rounded-lg p-6 shadow-sm hidden md:block h-fit">
              <div className="flex flex-col items-center text-center mb-8">
                <Avatar className="w-32 h-32 mb-4">
                  <AvatarImage

                    src="https://avatars.githubusercontent.com/u/124599?v=4"
                    alt="Profile picture"
                  />
                  <AvatarFallback>CE</AvatarFallback>
                </Avatar>
                <h2 className="text-lg md:text-[24px] font-semibold">Clint Eastwood</h2>
              </div>

              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative flex items-center px-4 py-4 hover:bg-gray-50 rounded-none border-t border-[#C1C1C1] text-xl  ${slug === item.href?.split("/")[2] ? "text-primary font-semibold" : "text-[#1A1A1A] font-[400]"}`}
                  >
                    <item.icon className={`${slug === item.href?.split("/")[2] ? "text-primary" : "text-[#1A1A1A]"} w-[32px] h-[32px] mr-3`} />
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="ml-auto bg-yellow-400 text-black text-xs px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                    {slug === item.href?.split("/")[2] && (
                      <div className="absolute top-0 -right-5 w-2 h-full bg-primary"></div>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

