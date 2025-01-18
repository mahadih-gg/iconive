'use client'

import Heading from "@/components/common/Heading";
import A__Input from "@/components/Form/A__Input";
import A__Select from "@/components/Form/A__Select";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Customize__Form() {
    return (
        <div className="bg-[#F9F5F0] md:py-[80px] py-[40px] px-5 md:px-0">
            <div className="max-w-[860px] mx-auto">
                <Heading title="CUSTOM A HAIR SYSTEM" subTitle="At Iconive Hair Wigs, our custom section provides a personalized and luxurious experience. With our custom-made products service, you can tailor your wig to meet your unique desires. Simply share your preferences and expectations with our customer care specialist, and they will guide you through the entire process, ensuring you find the perfect wig that is exclusively designed for you." />
                
                <form className="pt-10 space-y-5">
                    <A__Input type="text" name="client_name" placeholder="Client Name" />
                    <div className="grid grid-cols-2 gap-5">
                        <A__Input type="text" name="order_quantity" placeholder="Order Quantity" />
                        <A__Input type="text" name="base_size" placeholder="Base Size" />
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <A__Select label="Base Material" name="base_material" options={[]} defaultValue="" />
                        <A__Select label="Hair Length" name="hair_length" options={[]} defaultValue="" />
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <A__Select label="Hair Material" name="hair_material" options={[]} defaultValue="" />
                        <A__Select label="Hair Color" name="hair_color" options={[]} defaultValue="" />
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <A__Select label="Pre-Haircut" name="pre_haircut" options={[]} defaultValue="" />
                        <A__Select label="Percentage of Grey Hair" name="percentage_of_grey_hair" options={[]} defaultValue="" />
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <A__Select label="Hair direction" name="hair_direction" options={[]} defaultValue="" />
                        <A__Select label="Hair Density" name="hair_density" options={[]} defaultValue="" />
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <A__Select label="Hair texture for Ladies" name="hair_texture_for_ladies" options={[]} defaultValue="" />
                        <A__Select label="Hair texture for Gents" name="hair_texture_for_gents" options={[]} defaultValue="" />
                    </div>

                    <A__Input type="textarea" name="special_instructions" placeholder="Special Instructions" />

                    <Button className="w-full md:w-[241px] h-[40px] rounded-[11px] uppercase text-[18px] font-[700] ">SUBMIT</Button>
                </form>

                <div className="pt-[60px]">
                    <p className="text-[14px] md:text-[16px] font-[400] text-[#000]">
                        Custom orders at Iconive are specifically crafted to meet your unique needs and preferences. Due to the personalized nature of these orders, <strong>returns or exchanges are not accepted.</strong> We strongly advise you to take accurate measurements to ensure a perfect fit <strong>for your custom hair system. For a more Personalized Customization, please download Custom Sheet.</strong>

                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 px-0 md:px-10 pt-[70px]">
                        <Button className="w-full h-[54px] rounded-[11px] uppercase text-[14px] md:text-[18px] font-[700] ">DOWNLOAD CUSTOM SHEET</Button>
                        <Link href="/repair">
                            <Button className="w-full h-[54px] rounded-[11px] uppercase text-[14px] md:text-[18px] font-[700] ">Apply for repair</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}