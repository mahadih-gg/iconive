import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export default function A__Select({ label, name, options, defaultValue }: { label: string, name: string, options: { value: string, label: string }[], defaultValue: string, className?: string }) {
    return (
        <div className={`space-y-2`}>
            <Label htmlFor={name} className="text-[#000] text-[14px] font-[400]">{label}</Label>
            <Select defaultValue={defaultValue}>
                <SelectTrigger className="border-[#AFAFAF] border-2 h-[54px] text-[18px] font-[400] ">
                    <SelectValue placeholder={`Select ${defaultValue}`} />
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