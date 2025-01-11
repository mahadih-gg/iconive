import Link from "next/link";
import { Facebook, Instagram, ShoppingBag, Twitter, Whatsapp, Youtube } from "../Icons";
import { Heart, MailIcon, Search } from "lucide-react";
import Logo from "../common/Logo";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Currency__Switcher from "../common/Currency__Switcher";

const socialLinks = [
    {
        name: "Facebook",
        icon: <Facebook width={18} height={18} className="text-[#999] hover:text-primary transition-all duration-300" />,
        href: "https://www.facebook.com/iconivehairwigs"
    },
    {
        name: "Instagram",
        icon: <Instagram width={18} height={18} className="text-[#999] hover:text-primary transition-all duration-300" />,
        href: "https://www.instagram.com/iconivehairwigs"
    },
    {
        name: "Twitter",
        icon: <Twitter width={18} height={18} className="text-[#999] hover:text-primary transition-all duration-300" />,
        href: "https://www.twitter.com/iconivehairwigs"
    },
    {
        name: "Youtube",
        icon: <Youtube width={18} height={18} className="text-[#999] hover:text-primary transition-all duration-300" />,
        href: "https://www.youtube.com/iconivehairwigs"
    },
    {
        name: "Whatsapp",
        icon: <Whatsapp width={18} height={18} className="text-[#999] hover:text-primary transition-all duration-300" />,
        href: "https://www.whatsapp.com/iconivehairwigs"
    },
]



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
    // {
    //     name: "Wholesale",
    //     href: "/wholesale"
    // },
]

export default function Header() {
    return (
        <header>
            {/* top promo */}
            <div className="flex items-center justify-center bg-dark h-[40px]">
                <p className="text-white text-sm font-[400]">FREE INTERNATIONAL SHIPPING On Orders Over $200</p>
            </div>
            {/* nav */}
            <nav className=" shadow-md">
                {/* top nav */}
                <div className="bg-[#f8f9fa] border-b border-[#dee2e6]  h-[45px] flex items-center">
                    <div className="container flex items-center justify-between ">
                        <Link href="mailto:iconivehairwigs@gmail.com" className="flex items-center justify-center gap-2">
                            <MailIcon className="w-5 h-5 text-dark" />
                            <p className="text-[#020201] text-sm font-[400]">iconivehairwigs@gmail.com</p>
                        </Link>

                        <div className="flex items-center justify-center gap-5">
                            {socialLinks.map((link) => (
                                <Link href={link.href} key={link.name}>
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                {/* logo */}
                <div className="container flex items-center justify-center py-4">
                    <Logo />
                </div>
                {/* menu */}
                <div className="container flex items-center justify-between py-4">
                    {/* currency selector */}
                    <Currency__Switcher />  
                    {/* menus */}
                    <ul className="flex items-center justify-between gap-10">
                        {menus.map((menu, index) => (
                            <li key={index}>
                                <Link className="text-base font-[400] text-black hover:text-primary transition-all duration-300 uppercase" href={menu.href}>{menu.name}</Link>
                            </li>
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
                        <button>
                            <ShoppingBag width={23} height={23} className="text-dark hover:text-primary transition-all duration-300" />
                        </button>
                        <button className="pl-[10px]">
                            <Avatar className="w-10 h-10">
                                <AvatarImage className="w-10 h-10 rounded-full" src="https://github.com/shadcn.png" />
                                <AvatarFallback className="w-10 h-10 rounded-full">CN</AvatarFallback>
                            </Avatar>
                        </button>
                    </div>
                </div>
            </nav>

        </header>
    )
}
