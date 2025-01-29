'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function Sort() {
    const [sort, setSort] = useState('price_asc')

    const sortOptions = [
        { value: 'price_asc', label: 'Price: Low to High' },
        { value: 'price_desc', label: 'Price: High to Low' },
        { value: 'name_asc', label: 'Name: A to Z' },
        { value: 'name_desc', label: 'Name: Z to A' },
    ]

    return (
        <Select defaultValue={sort} onValueChange={(value) => setSort(value)}>
            <SelectTrigger className="bg-[#FFEEBB] md:bg-transparent  px-2 text-[#ECB30A] md:text-black text-sm md:text-base font-[400] uppercase border-none shadow-none">
                <SelectValue />
            </SelectTrigger>
            <SelectContent className="text-[#ECB30A] md:text-black text-sm md:text-base font-[400] uppercase">
                {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

