import Link from "next/link";
import Logo from "../common/Logo";
import { AmericanExpress, Bkash, DHL, Facebook, FedEx, Instagram, Linkedin, Mastercard, Nagad, Twitter, UPS, Visa, Youtube } from "../Icons";

const shippingPartner = [
  {
    name: 'DHL',
    icon: <DHL />
  },
  {
    name: 'FedEx',
    icon: <FedEx />
  },
  {
    name: 'UPS',
    icon: <UPS />
  }
]

const paymentPartner = [
  {
    name: 'American Express',
    icon: <AmericanExpress />
  },
  {
    name: 'Visa',
    icon: <Visa />
  },
  {
    name: 'Mastercard',
    icon: <Mastercard />
  },
  {
    name: 'Nagad',
    icon: <Nagad />
  },

  {
    name: 'Bkash',
    icon: <Bkash />
  },

];


const socialLink = [
  {
    name: 'Facebook',
    icon: <Facebook width={18} height={18} className="text-[#939393]"/>,
    link: 'https://www.facebook.com/iconivebd'
  },
  {
    name: 'Instagram',
    icon: <Instagram width={18} height={18} className="text-[#939393]"/>,
    link: 'https://www.instagram.com/iconivebd'
  },
  {
    name: 'Twitter',
    icon: <Twitter width={18} height={18} className="text-[#939393]"/>,
    link: 'https://www.twitter.com/iconivebd'
  },
  {
    name: 'Linkedin',
    icon: <Linkedin width={18} height={18} className="text-[#939393]"/>,
    link: 'https://www.linkedin.com/iconivebd'
  },
  {
    name: 'Youtube',
    icon: <Youtube width={18} height={18} className="text-[#939393]"/>,
    link: 'https://www.youtube.com/iconivebd'
  } 
]

const policies = [
  {
    name: 'Privacy Policy',
    link: '/privacy-policy'
  },
  {
    name: 'Terms & Conditions',
    link: '/terms-and-conditions'
  },
  {
    name: 'Return and Refund',
    link: '/return-and-refund-policy'
  },
  {
    name: 'Shipping Policy',
    link: '/whol  esale'  
  }
]

const profile = [
  {
    name: 'About Us',
    link: '/about-us'
  },
  {
    name: 'Our Shipping Partners',
    link: '/shipping-partners'
  },
  {
    name: 'Payment methods',
    link: '/payment-methods'
  },
  {
    name: 'FAQ',
    link: '/faq'
  }
]

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] ">
      <div className="container py-[80px]">
        <div className="grid grid-cols-3 gap-5">
          <div>
            <h3 className="text-sm font-[400] pb-[15px] text-[#999999]">Shipping Partner</h3>
            <div className="flex items-center gap-5">
              {shippingPartner.map((item, index) => (
                <div key={index} className="w-[59px] h-[38px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] rounded-[5px] flex items-center justify-center">
                  {item.icon}
                </div>
              ))}
            </div>
            <h3 className=" text-sm font-[400] pb-[15px] pt-[30px] text-[#999999]">Accepted Payment Methods</h3>
            <div className="flex items-center gap-5">
              {paymentPartner.map((item, index) => (
                <div key={index} className="w-[59px] h-[38px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] rounded-[5px] flex items-center justify-center">
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
          <div className="border-l border-[#7D7D7D] border-r flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <Logo className="text-[#626262]" />
                <ul className="flex items-center gap-5 pt-[30px]">
                  {socialLink.map((item, index) => (
                    <li key={index}>
                      <Link href={item.link} target="_blank" className="w-[35px] h-[35px] flex items-center justify-center rounded-[50%] border-[#939393] border-2">
                        {item.icon}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
          </div>

          <div className="grid grid-cols-2 gap-5 ">
            <div>
              <h3 className="text-sm font-[400] pb-[15px] text-[#0E0D0D] uppercase">Our Policies</h3>
              <ul className="flex flex-col gap-2">  
                {policies.map((item, index) => (
                  <li key={index} className="pb-[10px]">
                    <Link href={item.link} className="text-sm font-[400] text-[#0E0D0D] hover:text-primary transition-all duration-300">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-[400] pb-[15px] text-[#0E0D0D] uppercase">Our Profile</h3>
              <ul className="flex flex-col gap-2">  
                {profile.map((item, index) => (
                  <li key={index} className="pb-[10px]">
                    <Link href={item.link} className="text-sm font-[400] text-[#0E0D0D] hover:text-primary transition-all duration-300">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
      <div className="bg-dark py-[10px]">
        <div className="container flex items-center justify-center">
          <p className="text-base font-[400] text-white"><span className="text-[#626262]">All Rights Reserved by</span> Iconive Hair Wigs</p>
        </div>
      </div>
    </footer>
  );
}

