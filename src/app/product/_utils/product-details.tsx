import { Raleway } from "next/font/google"

const raleway = Raleway({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
})

export default function ProductDetails() {
    return (
        <div className="py-10 border-t border-gray-200 container">
            <div className="max-w-[1200px] mx-auto space-y-3">
                <h2 className={`text-xl uppercase md:text-[35px] font-[600]  ${raleway.className}`}>Gents Wigs</h2>
                <p className="text-base md:text-lg font-[400] text-gray-500 max-w-[450px]">
                    At Iconive, we understand that men also need a perfect hairstyle to complement their personality and style. Our collection of gents wigs is designed with precis
                </p>
            </div>
        </div>
    )
}