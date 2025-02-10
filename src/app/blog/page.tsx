import Other__Hero from "@/components/common/Other__Hero";
import { Raleway } from "next/font/google";
import Link from "next/link";


const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-raleway',
})



const navigation = [
  { name: "Hair Wave-Curl & Density Guide", href: "/blog" },
  { name: "Choosing the Right Wig", href: "/blog" },
  { name: "Choosing The Right Colour", href: "/blog" },
  { name: "Caring For your Wig", href: "/blog" },
]




export default function BlogPage() {
  return (
    <main className="">
      <Other__Hero title="" image="/images/blog-banner.jpg" />

      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] min-h-[calc(100vh-200px)] gap-6">
          {/* Left Sidebar */}
          <div className="bg-white rounded-lg p-6 shadow-sm hidden md:block h-fit">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative group hover:text-primary flex items-center px-4 py-4 hover:bg-gray-50 rounded-none border-t border-[#C1C1C1] font-normal text-[20px] `}
                >

                  <span>{item.name}</span>
                  <div className="absolute top-0 right-0 w-1 h-full bg-primary  group-hover:block hidden"></div>
                </Link>

              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="overflow-y-auto">
              <p className="text-base md:text-[18px] font-normal py-8">Choosing the right wig can make all the difference in how you look and feel. Here are some tips to help you select the perfect wig:</p>
              <div className="space-y-3">

                <h3 className={`text-[18px] md:text-[26px] font-semibold text-[#ECB30A] ${raleway.className}  `}>Consider Your Face Shape:</h3>
                <p className="text-base md:text-[18px] font-normal">
                Different wigs suit different face shapes. For example, if you have a round face, a long, layered wig can help elongate your features. On the other hand, if you have a square face, a short, curly wig can soften your features.
                </p>
              </div>
          </div>
        </div>

      </div>
    </main>
  )
}
