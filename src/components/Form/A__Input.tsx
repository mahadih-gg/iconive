import { Input } from "../ui/input";

export default function A__Input({ type, name, placeholder, className, label, required }: { type: string, name: string, placeholder?: string, className?: string, label?: string, required?: boolean }) {
    if (type === "textarea") {
        return (
            <textarea name={name} placeholder={placeholder} className={`${className ? className : ' w-full p-5  font-[400] text-[#000] placeholder:text-[#000] border-t-0 border-r-0 border-l-0 rounded-none text-[18px] placeholder:text-[18px] focus:outline-none h-[230px] bg-white'}`} />
        )
    }

    return (
        <>
            {
                !label ?
                    <Input type={type} name={name} placeholder={placeholder} className={`${className ? className : 'w-full py-5 border-b-2 border-b-[#7D7D7D] font-[400] text-[#000] placeholder:text-[#000] border-t-0 border-r-0 border-l-0 rounded-none text-[18px] placeholder:text-[18px] focus:outline-none'} `} />
                    :
                    <div className="flex flex-col gap-2">
                        <label htmlFor={name} className="text-base font-[400] text-[#212529]">{label} {required && <span className="text-red-500">*</span>}</label>
                        <Input type={type} name={name} placeholder={placeholder} className={`${className ? className : 'w-full py-5 border-b-2 border-b-[#7D7D7D] font-[400] text-[#000] placeholder:text-[#000] border-t-0 border-r-0 border-l-0 rounded-none text-[18px] placeholder:text-[18px] focus:outline-none'}    `} />
                    </div>
            }
        </>


    )

}