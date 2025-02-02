"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Raleway } from "next/font/google"
import { MenuIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] })

const menus = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Shop",
        href: "/shop"
    },
    {
        name: "Guide me",
        href: "/guide-me"
    },
    {
        name: "Customize",
        href: "/customize"
    },
    {
        name: "Offers",
        href: "/offers"
    },
    {
        name: "Join us",
        href: "/join-us"
    },
    {
        name: "Blog",
        href: "/blog"
    },
    {
        name: "Wholesale",
        href: "/wholesale"
    },
]



export default function ShoppingCart() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                {/* <button>
          <ShoppingBag width={23} height={23} className="text-dark hover:text-primary transition-all duration-300" />
        </button> */}
                <button className="pr-2">
                    <MenuIcon width={22} height={22} className=" text-dark hover:text-primary transition-all duration-300" />
                </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:max-w-[500px] sm:w-full">
                <SheetHeader className="pb-4 border-b">
                    <SheetTitle className={`flex items-center justify-between text-[22px] font-[500] ${raleway.className}`}>
                        Menu
                    </SheetTitle>
                </SheetHeader>
                <div className="pt-6 h-[calc(100vh-10rem)] overflow-y-auto">
                    <ul className="space-y-5">


                        {menus.map((menu, index) => (
                            <li key={index}>
                                <Link className="flex items-center gap-2 text-[18px] font-[500] hover:text-primary transition-all duration-300" href={menu.href}>{menu.name}</Link>
                            </li>
                        ))}
                    </ul>

                    <div className="pt-20 flex items-center justify-between gap-4">
                        <Button className="w-full bg-primary text-white">Login</Button>
                        <Button className="w-full bg-dark text-white">Signup</Button>
                    </div>



                </div>
            </SheetContent>
        </Sheet>
    )
}

