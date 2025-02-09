'use client'
import Link from "next/link"
import Image from "next/image"
import { MailIcon, Search, Heart, ShoppingCart } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import Currency__Switcher from "../common/Currency__Switcher"
import Logo from "../common/Logo"
import { useState } from "react"

export default function NavMenus({ menus, megamenu, socialLinks, }: { menus: { name: string, href: string, megamenu?: boolean }[], megamenu: { name: string, href: string, image: string }[], socialLinks: { href: string, name: string, icon: React.ReactNode }[] }) {
    const [isMegaMenu, setIsMegaMenu] = useState(false)
    return (
        <nav className=" shadow-md relative">
            {/* top nav */}


            <div className="bg-[#f8f9fa] border-b border-[#dee2e6]  h-[45px] flex items-center">
                <div className="container flex items-center justify-between ">
                    <Link href="mailto:iconivehairwigs@gmail.com" className="flex items-center justify-center gap-2">
                        <MailIcon className="w-5 h-5 text-dark" />
                        <p className="text-[#020201] text-sm font-[400]">iconivehairwigs@gmail.com</p>
                    </Link>

                    <div className="flex items-center justify-center gap-5">
                        {socialLinks.map((link: { href: string, name: string, icon: React.ReactNode }) => (
                            <Link href={link.href} key={link.name}>
                                {link.icon}
                            </Link>
                        ))}

                    </div>
                </div>
            </div>
            {/* logo */}
            <div className="container flex items-center justify-center py-4">
                <Logo className="text-[#1A1A1A]" />
            </div>
            {/* menu */}
            <div className="container flex items-center justify-between py-4">
                {/* currency selector */}
                <Currency__Switcher />
                {/* menus */}
                <ul className="flex items-center justify-between gap-10">
                    {menus.map((menu, index) => (
                        menu?.megamenu ? (

                            <li key={index}>
                                <button className="text-base font-[400] text-black hover:text-primary transition-all duration-300 uppercase" onClick={() => setIsMegaMenu(!isMegaMenu)}>{menu.name}</button>
                            </li>
                        ) : (

                            <li key={index}>
                                <Link className="text-base font-[400] text-black hover:text-primary transition-all duration-300 uppercase" href={menu.href}>{menu.name}</Link>
                            </li>
                        )

                    ))}
                    <li>

                        <Link className="text-base font-[600] text-primary transition-all duration-300 uppercase" href="/wholesale">
                            Wholesale
                        </Link>
                    </li>
                </ul>

                {/* icons */}
                <div className="flex items-center justify-between gap-4">
                    <button>
                        <Search width={23} height={26} className="text-dark hover:text-primary transition-all duration-300" />
                    </button>
                    <button>
                        <Heart width={23} height={26} className="text-dark hover:text-primary transition-all duration-300" />
                    </button>
                    <ShoppingCart />
                    <Link className="pl-[10px]" href="/profile/my-profile">
                        <Avatar className="w-10 h-10">
                            <AvatarImage className="w-10 h-10 rounded-full" src="https://github.com/shadcn.png" />
                            <AvatarFallback className="w-10 h-10 rounded-full">CN</AvatarFallback>
                        </Avatar>
                    </Link>
                    {/* <AuthModal />    */}
                </div>
            </div>

            {/* megamenu */}
            {
                isMegaMenu ?
                    <div className="absolute top-full left-0 w-full bg-[#f8f9fa] shadow-md  overflow-y-auto">
                        <div className="container">
                            <div className="flex md:flex-row flex-col justify-between items-center gap-y-4 gap-x-0">
                                {megamenu?.map((menu, index) => (
                                    <Link href={menu.href} key={index} className="relative  group w-full hover:bg-white transition-all duration-300">
                                        <div className={` p-5 w-full relative  text-center flex flex-col items-center justify-center ${index === 3 ? '' : 'border-r border-[#dee2e6]'}`}>

                                            <Image src={menu.image} alt={menu.name} width={800} height={800} />
                                            <h3 className="text-lg font-[500] text-[#212529] pt-3  group-hover:font-[600] transition-all duration-300 ">{menu.name}</h3>
                                        </div>
                                        {/* border-bottom */}
                                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                    </Link>




                                ))}
                            </div>
                        </div>



                    </div>
                    : null
            }
        </nav>
    )
}
