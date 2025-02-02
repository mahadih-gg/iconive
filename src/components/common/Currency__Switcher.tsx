'use client'

import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Currency__Switcher() {
    const [currency, setCurrency] = useState('USD');


    console.log(currency);

    return (
        <Select defaultValue="USD" onValueChange={(value) => setCurrency(value)}>
            <SelectTrigger className="text-[#383838] text-sm md:text-base font-[400] w-full md:max-w-[110px] bg-white rounded-none md:rounded-[32px] border-0 shadow-none md:shadow-[0_2px_12px_rgba(0,0,0,0.08)] h-[40px] px-0 md:px-6">
                <SelectValue />

            </SelectTrigger>
            <SelectContent className="text-[#383838] text-sm md:text-base font-[400]">
                <SelectItem value="USD">USD</SelectItem>
                <SelectItem value="BDT">BDT</SelectItem>
            </SelectContent>
        </Select>
    )
}