import { Button } from "@/components/ui/button";
import A__Input from "@/components/Form/A__Input";

export default function Wholesale__Login() {
    return (
        <div className="max-w-[1000px] mx-auto bg-[#F9F5F0] p-[60px] rounded-[10px] mt-[80px]">
            <div className="flex flex-col gap-0 justify-center items-center">
                <h3 className=" md:text-[35px] text-[28px] font-[400] uppercase text-black">Wholesale Login</h3>
                <p className="text-[14px] font-[400] text-[#666666]">
                    Login to your wholesale account
                </p>
            </div>

            <form className="mt-[40px] space-y-5 max-w-[427px] mx-auto">
                <A__Input type="email" name="email" placeholder="E-mail" />

                <A__Input type="password" name="password" placeholder="Password" />

                <div className="flex justify-center pt-6">
                    <Button className="w-[240px] mx-auto h-[40px] md:text-[18px] text-[16px] font-[600] rounded-[10px] uppercase">Login</Button>
                </div>

                <div className="flex justify-center pt-8 gap-5">
                    <span className=" md:text-[18px] text-[16px] font-[400] text-[#000]">Not a member?</span>
                    <button className=" transition-all duration-300 ease-in-out hover:text-primary md:text-[18px] text-[16px] font-[400] text-[#000] underline underline-offset-8"> Sign up here</button>
                </div>
            </form>

        </div>
    )
}