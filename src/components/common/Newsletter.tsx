import {Raleway} from "next/font/google";

const raleway = Raleway({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function Newsletter() {
    return (
        <div className="bg-white ">
            <div className="container py-[80px] flex flex-col items-center justify-center">
                <h3 className={`${raleway.className} text-[26px] font-[600] text-[#0E0D0D] uppercase`}>want 10% off?</h3>
                <p className="text-base font-[400] text-[#666666]">Join us and get the exclusive sales, product launches, wig tips & more directly delivered to your inbox.</p>


                <div className="flex items-center justify-center pt-[30px]">
                    <input type="text" placeholder="Your e-mail address" className="w-[300px] h-[40px] border-b-2 border-[#7D7D7D] rounded-none px-[10px] py-[5px] outline-none bg-transparent  mr-5 text-lg font-[400] placeholder:text-lg text-[#666666]" />
                    <button className="text-[24px] font-[600]  shadow-md bg-primary text-white px-[20px] py-[5px] rounded-[11px] w-[160px] h-[50px] ">Subscribe</button>
                </div>
            </div>
        </div>
    )
}