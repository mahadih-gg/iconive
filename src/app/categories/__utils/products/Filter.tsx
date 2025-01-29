'use client'
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

const categories = [
    {
        name: 'Gents Wigs',
        slug: 'gents-wigs',
        subCategories: [
            {
                name: 'Mono Base',
                slug: 'mono-base',
            },
            {
                name: 'Lace Base',
                slug: 'lace-base',
            },
            {
                name: 'Full Lace',
                slug: 'full-lace',
            },
            {
                name: 'Full Lace',
                slug: 'full-lace',
            }
        ]
    },
    {
        name: 'Ladies Wigs',
        slug: 'ladies-wigs',
        subCategories: [
            {
                name: 'Mono Base',
                slug: 'mono-base',
            },
            {
                name: 'Lace Base',
                slug: 'lace-base',
            },
        ]
    },
    {
        name: 'Kids Wigs',
        slug: 'kids-wigs',
        subCategories: [
            {
                name: 'Mono Base',
                slug: 'mono-base',
            },
            {
                name: 'Lace Base',
                slug: 'lace-base',
            },
            {
                name: 'Full Lace',
                slug: 'full-lace',
            }
        ]
    },
    {
        name: 'Hair Accessories',
        slug: 'hair-accessories',
        subCategories: []
    },
    {
        name: 'Hair Extensions',
        slug: 'hair-extensions',
        subCategories: []
    },
]

export default function Filter() {
    const [selected, setSelected] = useState<string[]>([])
    return (
        <div className="categories__filter bg-[#F6F6F6] rounded-[10px] px-5 py-10">
            <h2 className="text-[20px] font-[700] text-black uppercase pb-5">Categories</h2>
            <div className="border-t-2 border-[#B8B8B8] pt-5">
                <Accordion type="single" collapsible defaultValue="wigs" >
                    {
                        categories?.map((category) => (
                            category?.subCategories?.length ? (
                                <AccordionItem key={category.slug} value={category.slug} className="border-none">
                                    <AccordionTrigger className="flex justify-between hover:no-underline">
                                        <span className="text-xl font-normal">{category.name}</span>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="space-y-4 py-2">
                                            {category?.subCategories?.map((subCategory) => (
                                                <div key={subCategory.slug} className="flex items-center gap-5">
                                                    <Checkbox
                                                        id={subCategory.slug}
                                                        checked={selected.includes(subCategory.slug)}
                                                        onCheckedChange={(checked) => {
                                                            setSelected(
                                                                checked
                                                                    ? [...selected, subCategory.slug]
                                                                    : selected.filter((slug) => slug !== subCategory.slug)
                                                            )
                                                        }}
                                                        className={`${selected.includes(subCategory.slug) ? "border-primary bg-primary" : ""} w-[19px] h-[19px]`}
                                                    />
                                                    <label
                                                        htmlFor={subCategory.slug}
                                                        className="text-base font-[400] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#1A1A1A]"
                                                    >
                                                        {subCategory.name}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ) : (
                                <div key={category.slug} className="flex items-center gap-2 py-3">
                                    <Checkbox
                                        id={category.slug}
                                        checked={selected.includes(category.slug)}
                                        onCheckedChange={(checked) => {
                                            setSelected(
                                                checked
                                                    ? [...selected, category.slug]
                                                    : selected.filter((slug) => slug !== category.slug)
                                            )
                                        }}
                                        className={`${selected.includes(category.slug) ? "border-primary bg-primary" : ""} w-[19px] h-[19px]`}
                                    />
                                    <label
                                        htmlFor={category.slug}
                                        className="text-base font-[400] text-[#1A1A1A] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {category.name}
                                    </label>
                                </div>
                            )
                        ))
                    }
                </Accordion>
            </div>
        </div>
    )
}