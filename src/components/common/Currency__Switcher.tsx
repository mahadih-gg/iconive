'use client'

import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Currency__Switcher() {
    const [currency, setCurrency] = useState('USD');


    console.log(currency);

    return (
        <Select defaultValue="USD" onValueChange={(value) => setCurrency(value)}>
            <SelectTrigger className="text-[#383838] text-base font-[400] max-w-[110px] bg-white rounded-[32px] border-0 shadow-[0_2px_12px_rgba(0,0,0,0.08)] h-[40px] px-6">
                <SelectValue />
            </SelectTrigger>
            <SelectContent className="text-[#383838] text-base font-[400]">
                <SelectItem value="USD">USD</SelectItem>
                <SelectItem value="BDT">BDT</SelectItem>
            </SelectContent>
        </Select>
    )
}