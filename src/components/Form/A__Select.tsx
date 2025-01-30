import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function A__Select({ label, name, options, defaultValue, height, required }: { label: string, name: string, options: { value: string, label: string }[], defaultValue?: { value: any, label: string }, height?: string, required?: boolean }) {
    return (
        <div className={`space-y-2`}>
            <Label htmlFor={name} className="text-[#000] text-[14px] font-[400]">{label} {required && <span className="text-red-500">*</span>}</Label>
            <Select defaultValue={defaultValue?.value}>
                <SelectTrigger className={`border-[#AFAFAF] border-2 h-[${height ? height : '54px'}] text-[18px] font-[400] `}>
                    <SelectValue placeholder={`Select ${label}`} />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option, index) => (
                        <SelectItem key={index} className="text-[18px] font-[400] " value={option.value}>{option.label}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}