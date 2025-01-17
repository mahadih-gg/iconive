import { Input } from "../ui/input";

export default function A__Input({ type, name, placeholder, className }: { type: string, name: string, placeholder: string, className?: string }) {
    if (type === "textarea") {
        return (
            <textarea name={name} placeholder={placeholder} className={`${className ? className : ''} w-full p-5  font-[400] text-[#000] placeholder:text-[#000] border-t-0 border-r-0 border-l-0 rounded-none text-[18px] placeholder:text-[18px] focus:outline-none h-[230px] bg-white`} />
        )
    }

    return (
        <Input type={type} name={name} placeholder={placeholder} className={`${className ? className : ''} w-full py-5 border-b-2 border-b-[#7D7D7D] font-[400] text-[#000] placeholder:text-[#000] border-t-0 border-r-0 border-l-0 rounded-none text-[18px] placeholder:text-[18px] focus:outline-none`} />
    )

}