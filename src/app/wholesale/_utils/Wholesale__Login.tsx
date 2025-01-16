import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Wholesale__Login() {
    return (
        <div className="max-w-[1000px] mx-auto bg-[#F9F5F0] p-[60px] rounded-[10px] mt-[80px]">
            <div className="flex flex-col gap-0 justify-center items-center">
                <h3 className="text-[35px] font-[400] uppercase text-black">Wholesale Login</h3>
                <p className="text-[14px] font-[400] text-[#666666]">
                    Login to your wholesale account
                </p>
            </div>

            <form className="mt-[40px] space-y-5 max-w-[427px] mx-auto">
                <Input type="email" placeholder="E-mail" className="w-full p-4 border-b-2 border-b-[#7D7D7D] font-[400] text-[#000] placeholder:text-[#000] border-t-0 border-r-0 border-l-0 rounded-none text-[18px] placeholder:text-[18px]" />

                <Input type="password" placeholder="Password" className="w-full p-4 border-b-2 border-b-[#7D7D7D] font-[400] text-[#000] placeholder:text-[#000] border-t-0 border-r-0 border-l-0 rounded-none text-[18px] placeholder:text-[18px]" />

                <div className="flex justify-center pt-6">
                    <Button className="w-[240px] mx-auto h-[40px] text-[18px] font-[600] rounded-[10px] uppercase">Login</Button>
                </div>

                <div className="flex justify-center pt-8 gap-5">
                    <span className="text-[18px] font-[400] text-[#000]">Not a member?</span>
                    <button className=" transition-all duration-300 ease-in-out hover:text-primary text-[18px] font-[400] text-[#000] underline underline-offset-8"> Sign up here</button>
                </div>
            </form>

        </div>
    )
}