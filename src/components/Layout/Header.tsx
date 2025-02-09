import { Facebook, Instagram, Twitter, Whatsapp, Youtube } from "../Icons";
import MbHeader from "./mb-header";
import NavMenus from "./menus";



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
        href: "/shop",
        megamenu: true
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
        href: "/affiliate"
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

const megamenu = [

    {
        name: "Gents Wigs",
        href: "/shop/gents",
        image: "/images/categories.jpg"
    },
    {
        name: "Ladies Wigs",
        href: "/shop/ladies",
        image: "/images/categories.jpg"
    },
    {
        name: "Raw Hair",
        href: "/shop/raw-hair",
        image: "/images/categories.jpg"
    },
    {
        name: "Accessories",
        href: "/shop/accessories",
        image: "/images/categories.jpg"
    },


]


export default function Header() {
    return (
        <header>
            <div className="hidden lg:block">
                {/* top promo */}
                <div className="flex items-center justify-center bg-dark h-[40px]">
                    <p className="text-white text-sm font-[400]">FREE INTERNATIONAL SHIPPING On Orders Over $200</p>
                </div>
                {/* nav */}
                <NavMenus menus={menus} megamenu={megamenu} socialLinks={socialLinks} />
            </div>

            {/* Navbar for mobile */}
            <MbHeader />
        </header>
    )
}
