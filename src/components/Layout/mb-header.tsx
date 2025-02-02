'use client'

import { Search } from "lucide-react"
import Currency__Switcher from "../common/Currency__Switcher"
import Logo from "../common/Logo"
import ShoppingCart from "../common/cart/cart-popover"
import { useState, useEffect } from "react"
import MbMenuSidebar from "./mb-menu-sidebar"

export default function MbHeader() {
    // fixed header
    const [isFixed, setIsFixed] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setIsFixed(window.scrollY > 100)
        })
    }, [])
    return (
        <div className={`transition-all duration-300 h-[52px] flex items-center justify-center lg:hidden ${isFixed ? 'fixed top-0 left-0 right-0 z-50 bg-white' : ''}`}>
            <div className="container flex items-center justify-between ">
                <div className="flex items-center">


                    {/* <button className="pr-2">
                        <MenuIcon width={22} height={22} className="text-black" />
                    </button> */}
                    <MbMenuSidebar />
                    <Currency__Switcher />
                </div>
                <div className="flex items-center ">


                    <Logo className="text-[#222222] w-[150px] h-[25px]" />

                </div>

                <div className="flex items-center justify-end gap-4 ">
                    <button>
                        <Search width={22} height={22} className="text-black" />
                    </button>
                    <ShoppingCart />
                </div>
            </div>
        </div>
    )
}
